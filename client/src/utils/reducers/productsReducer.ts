import { ActionType } from './../../interfaces/ProductCtx';
import { Action } from '../../interfaces/ProductCtx';
import { ServerProduct } from '../../interfaces/Product';

export const productsReducer = (products: ServerProduct[], action: Action) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS:
      return action.payload.fetchedProducts;
    case ActionType.ADD_PRODUCT:
      return [action.payload.product, ...products];
    case ActionType.REMOVE_PRODUCT:
      return products;
    case ActionType.UPDATE_PRODUCT:
      return products;
    default:
      return products;
  }
};
