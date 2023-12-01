import { Link } from 'react-router-dom';
import Like from '../components/Like';
import formatPrice from '../utilities/formatPrice';
import styles from './Product.module.css';
import clsx from 'clsx';
import Pocketbase from 'pocketbase';
import { IImages, IProduct } from '../interfaces/ProductInterface';
import { useState } from 'react';

interface Props {
  data: IProduct;
  rawData?: IProduct;
  like?:boolean;
  className?: string;
}

export default function ({ className, data, rawData,like }: Props) {
  const [likeCount, setLikeCount] = useState(data.likes);
  return (
    <div style={{ position: 'relative' }}>
      <Link
        className={clsx(styles.product, className)}
        to={'/products/item/' + data.id}
      >
        <img
          className={styles.image}
          src={(data.images as IImages)?.sm}
          alt={data.name}
        />
        <div className={styles.info}>
          <h3 className={styles.name}>{data.name}</h3>
          <div className={styles.footer}>
            <span className={styles.price}>
              <span className={styles.cur}>T </span>
              {formatPrice(data.price)}
            </span>
          </div>
        </div>
      </Link>
      {
        (like && rawData) && 
        <Like
        className={styles.productLike}
        count={likeCount}
        onClick={(state, setState) => {
          const pb = new Pocketbase(import.meta.env.VITE_PB);
          const baseData = {
            name: data.name,
            description: data.description,
            price: data.price,
            stock: data.stock,
            sizes: data.sizes,
            colors: data.colors,
            images: rawData.images,
            category: data.category,
          };
          if (state === 'deactive') {
            setLikeCount((lastLikeCount) => ++lastLikeCount);
            pb.collection('products')
              .update(data.id, {
                ...baseData,
                likes: likeCount + 1,
              })
              .catch(() => {
                setLikeCount(() => data.likes);
                setState(false);
              });
          } else {
            setLikeCount((lastLikeCount) => --lastLikeCount);
            pb.collection('products')
              .update(data.id, {
                ...baseData,
                likes: likeCount - 1,
              })
              .catch(() => {
                setLikeCount(() => data.likes);
                setState(false);
              });
          }
        }}
      />
      }
    </div>
  );
}
