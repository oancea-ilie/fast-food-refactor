export interface ServerProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  stock: number;
  createdAt: Date;
}

export type Product = Omit<ServerProduct, 'id' | 'createdAt'>;
