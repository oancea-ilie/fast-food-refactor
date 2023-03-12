import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Children, NestError } from '../interfaces/SharedInterfaces';
import { Product } from '../interfaces/Product';
import { ProductApi } from '../api/productApi';

type ProductsContextI = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  fetchProducts: () => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};
export const ProductsContext = createContext<ProductsContextI | null>(null);

export const ProductsProvider = ({ children }: Children) => {
  const [products, setProducts] = useState<Product[]>([]);

  const productApi = useMemo(() => new ProductApi(), []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const fetchedProducts = await productApi.findAll();
      setProducts(fetchedProducts);
    } catch (error) {
      setError(true);
      throw Error((error as NestError).message);
    } finally {
      setIsLoading(false);
    }
  }, [productApi]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const values = useMemo(
    () => ({
      products,
      setProducts,
      fetchProducts,
      isLoading,
      error,
      setIsLoading,
      setError,
    }),
    [error, fetchProducts, isLoading, products]
  );

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};
