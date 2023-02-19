import { Product, ServerProduct } from './Product';

export enum ActionType {
  GET_PRODUCTS = 'GET_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
}
export interface ProductsContextI {
  products: ServerProduct[];
  methods: {
    setProducts: () => Promise<void>;
    addProduct: (newProduct: Product) => Promise<void>;
    removeProduct: (id: number) => void;
    updateProduct: (id: number, updatedProduct: Product) => void;
  };
}

export type Action =
  | {
      type: ActionType.GET_PRODUCTS;
      payload: {
        fetchedProducts: ServerProduct[];
      };
    }
  | {
      type: ActionType.ADD_PRODUCT;
      payload: {
        product: ServerProduct;
      };
    }
  | {
      type: ActionType.REMOVE_PRODUCT;
      payload: {
        id: number;
      };
    }
  | {
      type: ActionType.UPDATE_PRODUCT;
      payload: {
        id: number;
        updatedProduct: Product;
      };
    };
