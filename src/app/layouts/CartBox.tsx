import clsx from 'clsx';
import Counter from '../components/Counter';
import TrashButton from '../components/TrashButton';
import styles from './CartBox.module.css';
import useCartStore from '../stores/cartStore';
import ProductsSlide from './ProductsSlide';
import Button from '../components/Button';
import formatPrice from '../utilities/formatPrice';

interface Props {
  className?: string;
}

export default function ({ className }: Props) {
  let {
    products,
    currentProduct,
    removeProduct,
    count,
    setCount,
    setCurrentProdcutAmount,
  } = useCartStore();
  const getTotal = () => {
    return products.reduce((acc, cur) => cur.amount * cur.price + acc, 0);
  };
  return (
    <div className={clsx(styles.cartBox, className)}>
      {products.length > 0 && (
        <>
          <div className={styles.cartProduct}>
            <ProductsSlide
              data={products}
              rawData={products}
              variant="products-cart"
            />
          </div>
          <div className={styles.cartActions}>
            <TrashButton
              className={styles.trashBtn}
              onClick={() => {
                const currentProductId =
                  currentProduct.id || products.at(0)!.id;
                removeProduct(currentProductId);
                setCount(--count);
              }}
            />
            <Counter
              max={currentProduct.stock || products.at(0)?.stock!}
              value={currentProduct.amount}
              onChange={(count) => setCurrentProdcutAmount(count)}
            />
          </div>
          <p style={{ color: '#000' }}>
            Total: {formatPrice(getTotal()) + 'T'}
          </p>
          <Button>Checkout</Button>
        </>
      )}
      {products.length === 0 && <p style={{ color: 'black' }}>Nothing Here!</p>}
    </div>
  );
}
