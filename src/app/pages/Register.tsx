import Avatar from "../components/Avatar";
import Background from "../components/Background";
import Button from "../components/Button";
import Input from "../components/Input";
import Logo from "../components/Logo";
import SocialIcons from "../components/SocialIcons";
import styles from "./Register.module.css";
import Navigation from "../layouts/Navigation";
import { FormEventHandler, useRef, useState } from "react";
import Pocketbase from 'pocketbase';
import { ToastContainer, toast } from "react-toastify";

// import { Link } from "react-router-dom";

export default function () {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const emailbolRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const postRef = useRef<HTMLInputElement>(null);

 
  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const data = {
      username: userRef.current?.value,
      email: emailRef.current?.value,
      emailVisibility: emailbolRef.current?.value,
      fullName: nameRef.current?.value,
      phoneNumber: phoneRef.current?.value,
      address: addressRef.current?.value,
      postalCode: postRef.current?.value,
    };

    

  const pb = new Pocketbase(import.meta.env.VITE_PB);
  pb.collection('users')
    .create(data)
    .then(() => {
      toast.success('اطلاعات با موفقیت ثبت شد.');
      setIsSubmitting(false); 
    })
    .catch(() => {
      setIsSubmitting(false); 
      toast.error('خطا در ثبت اطلاعات. لطفاً اطلاعات را بررسی کنید.'); 
    });
  }
  return (
    <form className={styles.signupPage} onSubmit={handleSubmit}>
      <Background image="img/auth.png" />
      <Navigation className={styles.userInfoNav} />
      <Logo className={styles.signupLogo} />
      <Avatar img="svg/avatar.svg" className={styles.signupAvatar} />
      <div className={styles.signupBox}>
        <Input ref={userRef} required type="text" placeholder="Username" />
        <Input ref={nameRef} required type="text" placeholder="Full Name" />
        <Input ref={phoneRef} required type="number" placeholder="Phone Number" />
        <Input  required type="number" placeholder="code" />
        <SocialIcons className={styles.signupIcons} />
      </div>
      {/* <Link to={"/address"} className={styles.link}> */}
        <Button className={styles.signupBtn} children="Send code" isDisabled={isSubmitting} />
        <ToastContainer position="top-center" />

      {/* </Link> */}

      </form>
  );
}
