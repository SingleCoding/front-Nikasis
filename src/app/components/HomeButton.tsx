import clsx from 'clsx';
import { HTMLProps } from 'react';
import styles from './HomeButton.module.css';
import { Link } from 'react-router-dom';

interface Props extends HTMLProps<HTMLAnchorElement> {
  variant?: 'dark' | 'light';
  to?: string;
}

export default function ({ variant = 'light', children, className }: Props) {
  const variantClass = {
    dark: styles.dark,
    light: styles.light,
  };
  return (
    <Link
      to="products"
      className={clsx(styles.btn, variantClass[variant], className)}
    >
      {children}
    </Link>
  );
}
