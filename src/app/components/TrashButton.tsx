import styles from './TrashButton.module.css';
import { HiOutlineTrash } from 'react-icons/hi2';

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function ({ className, onClick }: Props) {
  return (
    <button onClick={onClick} className={[styles.trash, className].join(' ')}>
      <HiOutlineTrash />
    </button>
  );
}
