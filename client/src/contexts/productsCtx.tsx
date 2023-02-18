import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { isEqual } from 'lodash';

interface Props {
  children: JSX.Element | JSX.Element[];
}

interface Product {
  name: string;
  description: string;
  price: number;
}

interface ProductsContext {
  products: Product[];
  addProduct: (newProduct: Product) => void;
}

export const ProductsContext = createContext<ProductsContext | null>(null);

export const ProductsProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  const verifyExistingProduct = useCallback(
    (product: Product) => products.find((p) => isEqual(p, product)),
    [products]
  );

  const addProduct = useCallback(
    (newProduct: Product) => {
      if (!verifyExistingProduct(newProduct)) {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      }
    },
    [verifyExistingProduct]
  );

  const values = useMemo(() => ({ products, addProduct }), [addProduct, products]);

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
