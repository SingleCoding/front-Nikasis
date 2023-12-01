import { HTMLProps } from 'react';
import LogoBrand from '../assets/LogoBrand';
import LogoIcon from '../assets/LogoIcon';
import styles from './Logo.module.css';
import clsx from 'clsx';

interface Props extends HTMLProps<HTMLDivElement> {
  color?: 'white' | 'black';
  brandOnly?: boolean;
  animateBrand?: boolean;
  animateIcon?: boolean;
}

export default function ({
  className,
  color = 'white',
  brandOnly = false,
  animateBrand = false,
  animateIcon = false,
  ...props
}: Props) {
  const colorClass = {
    black: styles.blackTheme,
    white: styles.whiteTheme,
  };
  return (
    <div className={clsx(styles.logo, colorClass[color], className)} {...props}>
      {!brandOnly && (
        <LogoIcon
          className={clsx(
            animateIcon && 'animate__animated animate__fadeInLeft animate__slow'
          )}
        />
      )}
      <LogoBrand animate={animateBrand} />
    </div>
  );
}
