import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { isEqual } from 'lodash';
import { ActionType, Product, ProductsContextI } from '../interfaces/ProductCtx';
import { productsReducer } from '../utils/reducers/productsReducer';
import { Children } from '../interfaces/SharedInterfaces';

export const ProductsContext = createContext<ProductsContextI | null>(null);

export const ProductsProvider = ({ children }: Children) => {
  const [products, dispatch] = useReducer(productsReducer, []);

  const verifyExistingProduct = useCallback(
    (product: Product) => products.find((stateProduct) => isEqual(stateProduct, product)),
    [products]
  );

  const addProduct = useCallback(
    (newProduct: Product) => {
      if (!verifyExistingProduct(newProduct)) {
        dispatch({ type: ActionType.ADD_PRODUCT, payload: newProduct });
      }
    },
    [verifyExistingProduct]
  );

  const removeProduct = useCallback(
    (product: Product) => {
      if (verifyExistingProduct(product)) {
        dispatch({ type: ActionType.REMOVE_PRODUCT, payload: product });
      }
    },
    [verifyExistingProduct]
  );

  const updateProduct = (oldProduct: Product, newProduct: Product) => {
    if (!isEqual(oldProduct, newProduct) && oldProduct) {
      dispatch({ type: ActionType.UPDATE_PRODUCT, payload: { oldProduct, newProduct } });
    }
  };

  const values = useMemo(
    () => ({
      products,
      methods: {
        addProduct,
        removeProduct,
        updateProduct,
      },
    }),
    [addProduct, products, removeProduct]
  );

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }

  return context;
};
