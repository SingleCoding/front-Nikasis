import { HTMLProps } from 'react';
import styles from './Background.module.css';
import clsx from 'clsx';

interface Props extends HTMLProps<HTMLDivElement> {
  image: string;
}

export default function ({ className, image, ...props }: Props) {
  return (
    <div className={clsx(styles.bg, className)} {...props} aria-hidden>
      <img src={image} />
    </div>
  );
}
