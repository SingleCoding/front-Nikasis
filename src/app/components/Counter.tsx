import styles from './Counter.module.css';
import { HiMinus } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';
import useCartStore from '../stores/cartStore';

interface Props {
  max: number;
  value: number;
  onChange: (count: number) => void;
}

export default function ({ max, value = 1 }: Props) {
  const { setCurrentProdcutAmount } = useCartStore();
  return (
    <div className={styles.counter}>
      <button
        onClick={() => setCurrentProdcutAmount(value > 1 ? --value : value)}
        className={styles.decrement}
      >
        <HiMinus />
      </button>
      <span className={styles.productNumber}>{value}</span>
      <button
        onClick={() => setCurrentProdcutAmount(value < max ? ++value : value)}
        className={styles.increment}
      >
        <HiPlus />
      </button>
    </div>
  );
}
