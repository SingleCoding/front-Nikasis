import { HiShoppingBag } from 'react-icons/hi2';
import Background from '../components/Background';
import Button from '../components/Button';
import Color from '../components/Color';
import Size from '../components/Size';
import styles from './ProductDetails.module.css';
import transition from '../utilities/transition';
import Navigation from '../layouts/Navigation';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IImages, IProduct } from '../interfaces/ProductInterface';
import Pocketbase from 'pocketbase';
import formatPrice from '../utilities/formatPrice';
import Loading from '../components/Loading';
import useCartStore, { CartStoreProduct } from '../stores/cartStore';
import { BsFillCartCheckFill } from 'react-icons/bs';

export default transition(function () {
  const id = useParams().id;
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const pb = new Pocketbase(import.meta.env.VITE_PB);
    (async () => {
      try {
        const product = await pb.collection('products').getOne<IProduct>(id!);

        for (let index in product.colors) {
          const color = await pb
            .collection('colors')
            .getOne<{ hex: string }>(product.colors[index]);
          product.colors[index] = color.hex;
        }

        for (let index in product.sizes) {
          const size = await pb
            .collection('sizes')
            .getOne<{ name: string }>(product.sizes[index]);
          product.sizes[index] = size.name;
        }

        const image = await pb
          .collection('images')
          .getOne(product.images as string);
        product.images = {
          sm: pb.getFileUrl(image, image.sm),
          lg: pb.getFileUrl(image, image.lg),
        };
        setLoading(false);
        setProduct(product);
      } catch (error) {
        window.alert((error as Error).message);
      }
    })();
  }, []);

  const navigate = useNavigate();

  const {
    products: cartProducts,
    count: cartCount,
    setCount: setCartCount,
    addProduct: addCartProduct,
  } = useCartStore();

  const handleAddToCart = () => {
    // Checking if prodcut is loaded
    if (!product) return;

    // Checking if prodcut is already in cart
    if (cartProducts.find((cartProduct) => cartProduct.id === product.id))
      return;

    setCartCount(cartCount + 1);
    const cartProduct: CartStoreProduct = { ...product, amount: 1 };
    addCartProduct(cartProduct);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className={styles.productDetailsPage}>
          <Background image={(product?.images as IImages)?.lg} />
          <Navigation />
          <div className={styles.productBox}>
            <img
              className={styles.productBrand}
              src="svg/brand-black.svg"
              alt=""
            />
            <h2>{product?.name}</h2>
            <div className={styles.action}>
              {product?.colors && <Color colors={product?.colors} />}
              {product?.sizes && <Size sizes={product?.sizes} />}
            </div>
            <h3>{product?.name}</h3>
            <p className={styles.description}>{product?.description}</p>
            <div className={styles.buttons}>
              <Button
                onClick={() => navigate('/buy/' + id)}
                className={styles.productBtn}
              >
                <span>
                  <span className={styles.cur}>T </span>
                  {product?.price && formatPrice(product?.price)}
                </span>
                <HiShoppingBag />
              </Button>
              <Button className={styles.productBtn} onClick={handleAddToCart}>
                Add to Cart
                <BsFillCartCheckFill />
              </Button>
            </div>
          </div>
        </main>
      )}
    </>
  );
});
