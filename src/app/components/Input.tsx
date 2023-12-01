import { ChangeEventHandler, forwardRef } from 'react';
import styles from './Input.module.css';

interface Props {
  type: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  required?: boolean;
  disabled?: boolean;
}

export default forwardRef<HTMLInputElement, Props>(
  ({ type, placeholder, value, required, disabled, onChange }, ref) => (
    <input
      ref={ref}
      className={styles.input}
      type={type}
      id=""
      placeholder={placeholder}
      value={value}
      required={required}
      disabled={disabled}
      onChange={onChange}
    />
  )
);
