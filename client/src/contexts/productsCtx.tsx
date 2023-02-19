import { createContext, useContext, useMemo, useReducer } from 'react';
import { ActionType, ProductsContextI } from '../interfaces/ProductCtx';
import { productsReducer } from '../utils/reducers/productsReducer';
import { Children } from '../interfaces/SharedInterfaces';
import { Product, ServerProduct } from '../interfaces/Product';
import { ProductApi } from '../api/productApi';

export const ProductsContext = createContext<ProductsContextI | null>(null);

export const ProductsProvider = ({ children }: Children) => {
  const productApi = new ProductApi();

  const initialState: ServerProduct[] = [];

  const [products, dispatch] = useReducer(productsReducer, initialState);

  const addProduct = async (newProduct: Product) => {
    const createdProduct = await productApi.create(newProduct);
    dispatch({
      type: ActionType.ADD_PRODUCT,
      payload: {
        product: createdProduct,
      },
    });
  };

  const updateProduct = async (id: number, updatedProduct: Product) => {
    const serverUpdatedProduct = await productApi.update(id, updatedProduct);
    dispatch({
      type: ActionType.UPDATE_PRODUCT,
      payload: {
        id,
        updatedProduct: serverUpdatedProduct,
      },
    });
  };

  const deleteProduct = async (id: number) => {
    const serverDeletedProduct = await productApi.delete(id);
    dispatch({
      type: ActionType.DELETE_PRODUCT,
      payload: {
        id: serverDeletedProduct.id,
      },
    });
  };

  const getProducts = async () => {
    const fetchedProducts = await productApi.findAll();
    dispatch({
      type: ActionType.GET_PRODUCTS,
      payload: { fetchedProducts },
    });
  };

  const values = useMemo(
    () => ({
      products,
      methods: {
        addProduct,
        updateProduct,
        getProducts,
        deleteProduct,
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [products]
  );

  return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>;
};

export const useProduct = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};
