import { MouseEventHandler } from 'react';
import styles from './Cart.module.css';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

interface Props {
  className?: string;
  number?: number;
  onClick?: MouseEventHandler;
}

export default function ({ className, number = 0, onClick }: Props) {
  return (
    <div className={[styles.cart, className].join(' ')} onClick={onClick}>
      <span className={styles.cartNumber}>{number}</span>
      <HiOutlineShoppingCart />
    </div>
  );
}
