import { API_URL } from '../constants/api';

export class ProductsApi {
  public async find() {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  }
}
