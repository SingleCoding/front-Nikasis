import styles from "./SocialIcons.module.css";
import { PiInstagramLogo, PiTelegramLogoThin } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
interface Props {
  className?: string;
  background?: boolean;
}

export default function ({ className, background }: Props) {
  return (
    <div
      className={[styles.icons, background ? styles.bg : "", className].join(
        " "
      )}
    >
      <a href="https://www.instagram.com/nikasis.shops" className={styles.icon}>
        <PiInstagramLogo />
      </a>
      <a href="mailto:mail@nikasis.com" className={styles.icon}>
        <FiMail />
      </a>
      <a href="https://t.me/nikasis_com" className={styles.icon}>
        <PiTelegramLogoThin />
      </a>
    </div>
  );
}
