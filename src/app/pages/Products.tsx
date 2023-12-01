import { useEffect, useRef, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Categories from '../layouts/Categories';
import Navigation from '../layouts/Navigation';
import ProductsSlide from '../layouts/ProductsSlide';
import transition from '../utilities/transition';
import styles from './Products.module.css';
import Pocketbase from 'pocketbase';
import { IProduct } from '../interfaces/ProductInterface';
import Loading from '../components/Loading';

interface Category {
  id: string;
  name: string;
}

export default transition(function () {
  const [products, setProducts] = useState<IProduct[]>();
  const [loading, setLoading] = useState(true);
  const fetchedCategories = useRef<Category[]>([]);
  const unfilteredProducts = useRef<IProduct[]>([]);
  const fetchedProducts = useRef<IProduct[]>([]);

  useEffect(() => {
    const pb = new Pocketbase(import.meta.env.VITE_PB);
    (async () => {
      try {
        const products = await pb
          .collection('products')
          .getFullList<IProduct>();

        fetchedProducts.current = products.map((product) =>
          JSON.parse(JSON.stringify(product))
        );

        const categories = await pb
          .collection('categories')
          .getFullList<{ id: string; name: string }>();

        fetchedCategories.current = categories;

        for (let product of products) {
          const image = await pb
            .collection('images')
            .getOne(product.images as string);
          product.images = {
            sm: pb.getFileUrl(image, image.sm),
            lg: pb.getFileUrl(image, image.lg),
          };
        }

        unfilteredProducts.current = products.map((product) =>
          JSON.parse(JSON.stringify(product))
        );

        const categoriesMap = [
          { id: '', name: 'pants' },
          { id: '', name: 'clothing' },
          { id: '', name: 'footwear' },
        ];

        for (let category of categoriesMap) {
          category.id = fetchedCategories.current.find(
            (value) => value.name === category.name
          )?.id!;
        }

        const filterdProducts = unfilteredProducts.current?.filter(
          (product) => {
            return product.category === categoriesMap[1].id;
          }
        );

        setLoading(false);
        setProducts(filterdProducts);
      } catch (error) {
        window.alert((error as Error).message);
      }
    })();
  }, []);

  const handleFilter = (index: number) => {
    const categories = [
      { id: '', name: 'pants' },
      { id: '', name: 'clothing' },
      { id: '', name: 'footwear' },
    ];
    for (let category of categories) {
      category.id = fetchedCategories.current.find(
        (value) => value.name === category.name
      )?.id!;
    }
    const filterdProducts = unfilteredProducts.current?.filter((product) => {
      return product.category === categories[index].id;
    });

    setProducts(filterdProducts);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <main className={styles.products}>
          <Background image="img/auth.png" />
          <Navigation />
          <Logo className={styles.productsLogo} />
          <Categories onSelect={handleFilter} />
          <ProductsSlide
            data={products}
            rawData={fetchedProducts.current}
            variant="products-list"
          />
        </main>
      )}
    </>
  );
});
