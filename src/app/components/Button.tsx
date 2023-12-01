import { MouseEventHandler, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
  className?: string;
  children?: ReactNode;
  onClick?: MouseEventHandler;
  isDisabled?: boolean;

}

export default function ({ className, children, onClick,isDisabled  }: Props) {
  return (
    <button onClick={onClick} disabled={isDisabled} className={[styles.btn, className].join(' ')}>
      {children}
    </button>
  );
}
