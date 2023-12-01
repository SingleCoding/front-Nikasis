import { useState } from 'react';
import styles from './Size.module.css';

interface Props {
  sizes: string[];
  selectedItem?: number;
}

export default function ({ sizes, selectedItem = 0 }: Props) {
  const [selected, setSelected] = useState(selectedItem);
  return (
    <div className={styles.sizeBox}>
      <span className={styles.sizeBoxText}>Sizes</span>
      <div className={styles.sizeBoxChange}>
        {sizes.map((size, index) => (
          <button
            className={[
              styles.size,
              selected === index ? styles.active : '',
            ].join(' ')}
            key={size}
            onClick={() => setSelected(index)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
