import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ProductsContextI } from '../interfaces/ProductCtx';
import { Children } from '../interfaces/SharedInterfaces';
import { Product, ServerProduct } from '../interfaces/Product';
import { ProductApi } from '../api/productApi';

export const ProductsContext = createContext<ProductsContextI | null>(null);

export const ProductsProvider = ({ children }: Children) => {
  const productApi = useMemo(() => new ProductApi(), []);

  console.log('Context rendered!');

  const [error, setError] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [products, setProducts] = useState<ServerProduct[]>([]);

  const getProducts = useCallback(async () => {
    6;
    setIsLoading(true);
    try {
      const fetchedProducts = await productApi.findAll();

      setProducts(fetchedProducts);
    } catch (e) {
      setError(true);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [productApi]);

  const addProduct = useCallback(
    async (newProduct: Product) => {
      try {
        setIsLoading(true);
        const createdProduct = await productApi.create(newProduct);

        setProducts((products) => [createdProduct, ...products]);
      } catch (e) {
        setError(true);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [productApi]
  );

  const updateProduct = useCallback(
    async (id: number, updatedProduct: Product) => {
      try {
        setIsLoading(true);
        const serverUpdatedProduct = await productApi.update(
          id,
          updatedProduct
        );
        setProducts((products) =>
          products.map((product) =>
            product.id === serverUpdatedProduct.id
              ? serverUpdatedProduct
              : product
          )
        );
      } catch (e) {
        setError(true);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [productApi]
  );

  const deleteProduct = useCallback(
    async (id: number) => {
      try {
        setIsLoading(true);
        const serverDeletedProduct = await productApi.delete(id);

        setProducts((products) =>
          products.filter((p) => p.id === serverDeletedProduct.id)
        );
      } catch (e) {
        setError(true);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [productApi]
  );

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = useMemo(
    () => ({
      products,
      error,
      isLoading,
      methods: {
        addProduct,
        updateProduct,
        getProducts,
        deleteProduct,
      },
    }),
    [
      products,
      error,
      isLoading,
      addProduct,
      updateProduct,
      getProducts,
      deleteProduct,
    ]
  );

  return (
    <ProductsContext.Provider value={values}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used inside the Products Provider');
  }
  return context;
};
