import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2';
import ArrowButton from '../components/ArrowButton';
import Cart from '../components/Cart';
import styles from './Navigation.module.css';
import { useState } from 'react';
import CartBox from './CartBox';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import useCartStore from '../stores/cartStore';

interface Props {
  className?: string;
}

export default function ({ className }: Props) {
  const [isCartActive, setCartActive] = useState(false);
  const { count: cartCount } = useCartStore();
  return (
    <div className={clsx(styles.icons, className)}>
      <ArrowButton className={styles.backBtn} />
      <div className={styles.navIcons}>
        <Cart
          onClick={() => setCartActive((lastState) => !lastState)}
          number={cartCount}
        />
        <CartBox
          className={clsx(
            styles.navigationCartBox,
            isCartActive && styles.active
          )}
        />
        <Link to={'/Login'}>
          <HiOutlineUser />
        </Link>
        <Link to={'/products'}>
          <HiOutlineShoppingBag />
        </Link>
      </div>
    </div>
  );
}
