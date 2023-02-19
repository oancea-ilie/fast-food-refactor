import { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
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
    const productNameAlreadyExists = products.find((p) => p.name === newProduct.name);

    if (!productNameAlreadyExists) {
      const createdProduct = await productApi.create(newProduct);
      if (createdProduct) {
        dispatch({
          type: ActionType.ADD_PRODUCT,
          payload: {
            product: createdProduct,
          },
        });
      }
    } else {
      throw new Error(`Product with name ${newProduct.name} already exists!`);
    }
  };

  const removeProduct = (id: number) => {
    dispatch({ type: ActionType.REMOVE_PRODUCT, payload: { id } });
  };

  const updateProduct = (id: number, updatedProduct: Product) => {
    dispatch({
      type: ActionType.UPDATE_PRODUCT,
      payload: {
        id,
        updatedProduct,
      },
    });
  };

  const setProducts = async () => {
    const fetchedProducts = await productApi.findAll();
    console.log(fetchedProducts);
    if (fetchedProducts) {
      dispatch({
        type: ActionType.GET_PRODUCTS,
        payload: { fetchedProducts },
      });
    }
  };

  const values = useMemo(
    () => ({
      products,
      methods: {
        addProduct,
        removeProduct,
        updateProduct,
        setProducts,
      },
    }),
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
