import { createContext, useCallback, useContext, useMemo, useReducer, useState } from 'react';
import { ActionType, ProductsContextI } from '../interfaces/ProductCtx';
import { productsReducer } from '../utils/reducers/productsReducer';
import { Children } from '../interfaces/SharedInterfaces';
import { Product, ServerProduct } from '../interfaces/Product';
import { ProductApi } from '../api/productApi';

export const ProductsContext = createContext<ProductsContextI | null>(null);

export const ProductsProvider = ({ children }: Children) => {
  const productApi = useMemo(() => new ProductApi(), []);

  const initialState: ServerProduct[] = [];

  const [error, setError] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [products, dispatch] = useReducer(productsReducer, initialState);

  const getProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchedProducts = await productApi.findAll();
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: { fetchedProducts },
      });
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
        dispatch({
          type: ActionType.ADD_PRODUCT,
          payload: {
            product: createdProduct,
          },
        });
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
        const serverUpdatedProduct = await productApi.update(id, updatedProduct);
        dispatch({
          type: ActionType.UPDATE_PRODUCT,
          payload: {
            id,
            updatedProduct: serverUpdatedProduct,
          },
        });
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
        dispatch({
          type: ActionType.DELETE_PRODUCT,
          payload: {
            id: serverDeletedProduct.id,
          },
        });
      } catch (e) {
        setError(true);
        throw e;
      } finally {
        setIsLoading(false);
      }
    },
    [productApi]
  );

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
    [products, error, isLoading, addProduct, updateProduct, getProducts, deleteProduct]
  );

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export const useProduct = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used inside the Products Provider');
  }
  return context;
};
