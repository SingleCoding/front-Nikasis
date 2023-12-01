import Avatar from "../components/Avatar";
import Background from "../components/Background";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";
import styles from "./RegisterAddress.module.css";
import Navigation from "../layouts/Navigation";

export default function () {
  return (
    <main className={styles.signupPage}>
      <Background image="img/auth.png" />
      <Navigation className={styles.userInfoNav} />
      <Logo className={styles.signupLogo} />
      <Avatar img="svg/avatar.svg" className={styles.signupAvatar} />
      <div className={styles.signupBox}>
        <Input required type="text" placeholder="complete address" />
        <Input required type="number" placeholder="Post code" />
        <SocialIcons className={styles.signupIcons} />
      </div>
      <Button className={styles.signupBtn} children="Continue" />

    </main>
  );
}
