export interface Product {
  name: string;
  description: string;
  price: number;
}
export enum ActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  UPDATE_PRODUCT = 'UPDATE_PRODUCT',
}

export type Action =
  | { type: ActionType.ADD_PRODUCT; payload: Product }
  | { type: ActionType.REMOVE_PRODUCT; payload: Product }
  | { type: ActionType.UPDATE_PRODUCT; payload: { oldProduct: Product; newProduct: Product } };

export interface ProductsContextI {
  products: Product[];
  methods: {
    addProduct: (newProduct: Product) => void;
    removeProduct: (product: Product) => void;
    updateProduct: (oldProduct: Product, newProduct: Product) => void;
  };
}
