import { API_URL } from '../constants/api';

export class ProductsApi {
  public async find() {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  }
  public async findById(id: number) {
    const response = await fetch(`${API_URL}/products/${id}`);
    return await response.json();
  }
}
