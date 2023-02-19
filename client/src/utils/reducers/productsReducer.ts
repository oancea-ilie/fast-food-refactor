import { ActionType } from './../../interfaces/ProductCtx';
import { Action } from '../../interfaces/ProductCtx';
import { ServerProduct } from '../../interfaces/Product';

export const productsReducer = (products: ServerProduct[], action: Action) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS:
      return action.payload.fetchedProducts;
    case ActionType.ADD_PRODUCT:
      return [action.payload.product, ...products];
    case ActionType.UPDATE_PRODUCT:
      return products.map((product) =>
        product.id === action.payload.id ? action.payload.updatedProduct : product
      );
    case ActionType.DELETE_PRODUCT:
      return products.filter((p) => p.id === action.payload.id);
    default:
      return products;
  }
};
