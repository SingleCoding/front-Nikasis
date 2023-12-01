import { useEffect, useState } from 'react';
import { FormEventHandler, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Pocketbase from 'pocketbase';
import { ToastContainer, toast } from 'react-toastify';

import ArrowButton from '../components/ArrowButton';
import Avatar from '../components/Avatar';
import Background from '../components/Background';
import Button from '../components/Button';
import Input from '../components/Input';
import Logo from '../components/Logo';
import SocialIcons from '../components/SocialIcons';
import Navigation from '../layouts/Navigation';
import transition from '../utilities/transition';
import styles from './UserInfo.module.css';
import 'react-toastify/dist/ReactToastify.css';
import { IProduct } from '../interfaces/ProductInterface';
import axios from 'axios';

export default transition(function () {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const postRef = useRef<HTMLInputElement>(null);
  const [amount, setAmount] = useState<number>(0);
  const [description] = useState<string>('hi');

  const id = useParams().id;

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    const data = {
      fullName: nameRef.current?.value,
      phoneNumber: phoneRef.current?.value,
      address: addressRef.current?.value,
      postalCode: postRef.current?.value,
      product: id,
    };

    

  const pb = new Pocketbase(import.meta.env.VITE_PB);
  pb.collection('purchases')
    .create(data)
    .then(() => {
      toast.success('اطلاعات با موفقیت ثبت شد.');
      setIsSubmitting(false); 
      handlePayment()
    })
    .catch(() => {
      setIsSubmitting(false); 
      toast.error('خطا در ثبت اطلاعات. لطفاً اطلاعات را بررسی کنید.'); 
    });
  }

  useEffect(() => {
    const pb = new Pocketbase(import.meta.env.VITE_PB);
    (async () => {
      try {
        const product = await pb.collection('products').getOne<IProduct>(id!);
        setAmount(product.price);
      } catch (error) {
        window.alert((error as Error).message);
      }
    })();
  }, [id]);

  
  const handlePayment = async () => {
    const response = await axios.post('https://nikasis.com/zarinpal/request.php', { amount ,description });
    try {
      window.location.href = "https://www.zarinpal.com/pg/StartPay/" + response.data;
    } catch (error) {
      console.error('Error sending payment request:', error);
    }
  };

  return (
    <form className={styles.signupPage} onSubmit={handleSubmit}>
      <Background image="img/auth.png" />
      <Navigation className={styles.userInfoNav} />
      <Logo className={styles.signupLogo} />
      <Avatar img="svg/avatar.svg" className={styles.signupAvatar} />
      <div className={styles.signupBox}>
        <Input ref={nameRef} required type="text" placeholder="Full Name" />
        <Input ref={phoneRef} required type="number" placeholder="Phone Number" />
        <Input ref={addressRef} required type="text" placeholder="Address" />
        <Input ref={postRef} required type="number" placeholder="Postal Code" />
        <SocialIcons className={styles.signupIcons} />
      </div>
      <div className={styles.extraLayer}></div>
      <Button className={styles.signupBtn} children="Buy" isDisabled={isSubmitting} />
      <ArrowButton className={styles.signupArrowBtn} />
      <ToastContainer position="top-center" />
    </form>
  );
});
