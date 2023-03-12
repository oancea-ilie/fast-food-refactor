export interface Product {
  _id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  createdAt: Date;
}

export type ProductAttributes = Omit<Product, 'id' | 'createdAt'>;
