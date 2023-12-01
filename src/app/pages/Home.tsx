import Background from '../components/Background';
import HomeButton from '../components/HomeButton';
import Logo from '../components/Logo';
import SocialMediaIcons from '../components/SocialMediaIcons';
import { HiChevronRight, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2';
import styles from './Home.module.css';
import transition from '../utilities/transition';
import DesktopPage from '../layouts/DesktopPage';
import { Link } from 'react-router-dom';


export default transition(function () {
  return (
    <>
    <DesktopPage />
    <main className="sm:hidden flex">
    <div className='m-5 w-screen flex justify-end'>
    <div className={styles.navIcons}>
    <Link to={'/Login'}>
          <HiOutlineUser />
        </Link>
        <Link to={'/products'}>
        <HiOutlineShoppingBag />
        </Link>
        </div>
    </div>

   

      <Background image="img/home.png" />
      <div className={styles.footer}>
        <Logo color="white" /* brandOnly */ animateBrand animateIcon />
        <SocialMediaIcons className="animate__animated animate__fadeInUp animate__slow" />
      </div>

      <HomeButton className={styles.homeProductsButton}>
        Go To Shoping
         <HiChevronRight />
         
      </HomeButton>
    </main>
    </>
  );
});
