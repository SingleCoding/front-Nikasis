import { create } from 'zustand';
import { IProduct } from '../interfaces/ProductInterface';

type CartStoreProduct = IProduct & {
  amount: number;
};

interface CartStore {
  products: CartStoreProduct[];
  currentProduct: CartStoreProduct;
  count: number;
  setCurrentProduct: (product: CartStoreProduct) => void;
  setCount: (newCount: number) => void;
  setCurrentProdcutAmount: (newAmount: number) => void;
  addProduct: (product: CartStoreProduct) => void;
  removeProduct: (id: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
  products: [],
  count: 0,
  currentProduct: {} as CartStoreProduct,
  addProduct(product) {
    set((store) => ({ products: [...store.products, product] }));
  },
  removeProduct(id) {
    set((store) => ({
      products: store.products.filter((product) => product.id != id),
    }));
  },
  setCurrentProduct(product) {
    set(() => ({ currentProduct: product }));
  },
  setCurrentProdcutAmount(newAmount) {
    set((store) => ({
      currentProduct: { ...store.currentProduct, amount: newAmount },
      products: store.products.map((product) =>
        product.id === store.currentProduct.id
          ? { ...product, amount: newAmount }
          : product
      ),
    }));
  },
  setCount(newCount) {
    set(() => ({
      count: newCount,
    }));
  },
}));

export type { CartStoreProduct };
export default useCartStore;
