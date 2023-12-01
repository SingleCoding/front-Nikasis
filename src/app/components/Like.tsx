import { Dispatch, SetStateAction, useState } from 'react';
import styles from './Like.module.css';
import clsx from 'clsx';
import { HiHeart } from 'react-icons/hi2';

interface Props {
  checked?: boolean;
  className?: string;
  count: number;
  onClick?: (
    state: 'active' | 'deactive',
    setState: Dispatch<SetStateAction<boolean>>
  ) => void;
}

export default function ({
  checked = false,
  className,
  count,
  onClick,
}: Props) {
  const [isActive, setActive] = useState(checked);

  const handleClick = () => {
    setActive((lastState) => !lastState);
    onClick && onClick(isActive ? 'active' : 'deactive', setActive);
  };
  return (
    <button
      className={clsx(styles.like, isActive && styles.active, className)}
      onClick={handleClick}
    >
      <HiHeart />
      {count}
    </button>
  );
}
