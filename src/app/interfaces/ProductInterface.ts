export interface IImages {
  sm: string;
  lg: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  sizes: string[];
  colors: string[];
  images: string | IImages;
  category: string;
  likes: number;
}
