import { useState } from 'react';
import styles from './Categories.module.css';
import clsx from 'clsx';
import { PiPantsFill } from 'react-icons/pi';
import { FaTshirt } from 'react-icons/fa';
import { CiShirt } from 'react-icons/ci';

interface Props {
  onSelect?: (index: number) => void;
  defaultSelected?: number;
}

export default function ({ onSelect, defaultSelected = 1 }: Props) {
  const [selected, setSelected] = useState(defaultSelected);
  const icons = [<PiPantsFill />, <FaTshirt />, <CiShirt />];
  return (
    <ul className={styles.categories}>
      {icons.map((icon, index) => (
        <li key={index}>
          <button
            className={clsx(styles.item, selected === index && styles.active)}
            onClick={() => {
              onSelect && onSelect(index);
              setSelected(index);
            }}
          >
            {icon}
          </button>
        </li>
      ))}
    </ul>
  );
}
