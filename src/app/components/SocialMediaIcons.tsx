import { CSSProperties } from 'react';
import styles from './SocialMediaIcons.module.css';
import { FiInstagram, FiMail } from 'react-icons/fi';
import { PiTelegramLogo } from 'react-icons/pi';
import clsx from 'clsx';

interface Props {
  noBackground?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function ({ className, style, noBackground = false }: Props) {
  return (
    <ul
      className={clsx(
        styles.smi,
        noBackground && styles.noBackground,
        className
      )}
      style={style}
    >
      <li className={styles.icon}>
        <a href="https://www.instagram.com/nikasis.shops">
          <FiInstagram />
        </a>
      </li>
      <li className={styles.icon}>
        <a href="mailto:mail@nikasis.com">
          <FiMail />
        </a>
      </li>
      <li className={styles.icon}>
        <a href="https://t.me/nikasis_com">
          <PiTelegramLogo />
        </a>
      </li>
    </ul>
  );
}
