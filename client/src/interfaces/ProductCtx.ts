import { Product, ServerProduct, ClientProduct } from './Product';

export enum ActionType {
  GET_PRODUCTS = 'GET_PRODUCTS',
  ADD_PRODUCT = 'ADD_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT',
}
export interface ProductsContextI {
  products: ClientProduct[];
  error: boolean;
  isLoading: boolean;
  methods: {
    getProducts: () => Promise<void>;
    addProduct: (newProduct: Product) => Promise<void>;
    updateProduct: (id: number, updatedProduct: Product) => Promise<void>;
    deleteProduct: (id: number) => Promise<void>;
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
      type: ActionType.UPDATE_PRODUCT;
      payload: {
        id: number;
        updatedProduct: ServerProduct;
      };
    }
  | {
      type: ActionType.DELETE_PRODUCT;
      payload: {
        id: number;
      };
    };
