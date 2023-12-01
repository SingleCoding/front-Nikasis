import styles from "./Avatar.module.css";

interface Props {
  img: string;
  className?: string;
}

export default function ({ img, className }: Props) {
  return (
    <div className={[styles.avatarBox, className].join(" ")}>
      <img className={styles.avatarIcon} src={img} alt="" />
    </div>
  );
}
