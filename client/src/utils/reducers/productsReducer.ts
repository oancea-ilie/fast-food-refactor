import { ActionType, Product } from './../../interfaces/ProductCtx';
import { Action } from '../../interfaces/ProductCtx';
import { isEqual } from 'lodash';

export const productsReducer = (products: Product[], action: Action) => {
  switch (action.type) {
    case ActionType.ADD_PRODUCT:
      return [...products, action.payload];
    case ActionType.REMOVE_PRODUCT:
      return products.filter((product) => !isEqual(product, action.payload));
    case ActionType.UPDATE_PRODUCT:
      return products.map((product) =>
        isEqual(product, action.payload.oldProduct) ? action.payload.newProduct : product
      );
    default:
      return products;
  }
};
