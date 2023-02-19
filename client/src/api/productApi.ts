import { API_URL } from '../constants/api';
import { Product, ServerProduct } from '../interfaces/Product';

type ApiFetch = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path?: string;
  body?: string;
};

export class ProductApi {
  private PRODUCT_API = `${API_URL}/products`;
  private async apiFetch({ method = 'GET', path = '', body }: ApiFetch) {
    try {
      const options = {
        method,
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(`${this.PRODUCT_API}${path}`, options);

      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  public async findAll() {
    return await this.apiFetch({});
  }

  public async create(newProduct: Product) {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });

      const createdProduct = await response.json();
      return createdProduct as ServerProduct;
    } catch (err) {
      console.log('Error fetching products!', err);
    }
  }
  public async findById(id: number) {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      const product = (await response.json()) as ServerProduct;
      return product;
    } catch (err) {
      console.log('Error fetching products!', err);
    }
  }
}
