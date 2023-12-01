import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Product from './Product';

import 'swiper/css';
import 'swiper/css/pagination';

import styles from './ProductsSlide.module.css';

import { IProduct } from '../interfaces/ProductInterface';
import useCartStore, { CartStoreProduct } from '../stores/cartStore';
import clsx from 'clsx';
import { useEffect } from 'react';

interface Props {
  data?: IProduct[] | CartStoreProduct[];
  rawData: IProduct[];
  variant: 'products-list' | 'products-cart';
}

export default function ({ data, rawData, variant }: Props) {
  const { setCurrentProduct } = useCartStore();
  useEffect(() => {
    setCurrentProduct(data?.at(0)! as CartStoreProduct);
  }, []);
  return (
    <Swiper
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className={clsx(
        variant === 'products-cart' ? styles.swiperCart : styles.swiperList
      )}
      onSlideChange={(swiper) =>
        variant === 'products-cart' &&
        setCurrentProduct(data?.at(swiper.realIndex)! as CartStoreProduct)
      }
      onSlidesLengthChange={(swiper) =>
        variant === 'products-cart' &&
        setCurrentProduct(data?.at(swiper.realIndex)! as CartStoreProduct)
      }
    >
      {data?.map(
        (product, index) =>
          product.stock > 0 && (
            <SwiperSlide key={product.name} className={styles.swiperSlide}>
              <Product
                data={product}
                rawData={rawData[index]}
                like={variant === 'products-list' && true}
              />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );
}
