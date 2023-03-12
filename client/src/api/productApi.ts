import { API_URL } from '../constants/urls';
import { Product, ProductAttributes } from '../interfaces/Product';
import { ApiFetch } from '../interfaces/SharedInterfaces';

export class ProductApi {
  private URL = `${API_URL}/products/`;
  private async apiFetch({ method = 'GET', path = '', body }: ApiFetch) {
    const options = {
      method,
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${this.URL}${path}`, options);
    const parsedResponse = await response.json();

    if (!response.ok) {
      if (parsedResponse?.error) {
        throw new Error(parsedResponse?.message);
      }
      throw new Error('An error occurred!');
    }
    return parsedResponse;
  }

  public async findAll() {
    const serverProducts: Product[] = await this.apiFetch({});
    return serverProducts;
  }

  public async findById(id: number) {
    const serverProduct: Product = await this.apiFetch({
      path: `${id}`,
    });

    return serverProduct;
  }

  public async create(newProduct: ProductAttributes) {
    const serverCreatedProduct: Product = await this.apiFetch({
      method: 'POST',
      body: JSON.stringify(newProduct),
    });

    return serverCreatedProduct;
  }

  public async update(id: number, updatedProduct: ProductAttributes) {
    const serverUpdatedProduct: Product = await this.apiFetch({
      method: 'PATCH',
      path: `${id}`,
      body: JSON.stringify(updatedProduct),
    });

    return serverUpdatedProduct;
  }

  public async delete(id: number) {
    const serverDeletedProduct: Product = await this.apiFetch({
      method: 'DELETE',
      path: `${id}`,
    });

    return serverDeletedProduct;
  }
}
