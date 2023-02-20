import { API_URL } from '../constants/urls';
import { Product, ServerProduct } from '../interfaces/Product';
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
    const serverProducts = await this.apiFetch({});
    return serverProducts as ServerProduct[];
  }

  public async findById(id: number) {
    const serverProduct = await this.apiFetch({ path: `${id}` });
    return serverProduct as ServerProduct;
  }

  public async create(newProduct: Product) {
    const serverCreatedProduct = await this.apiFetch({
      method: 'POST',
      body: JSON.stringify(newProduct),
    });
    return serverCreatedProduct as ServerProduct;
  }

  public async update(id: number, updatedProduct: Product) {
    const serverUpdatedProduct = await this.apiFetch({
      method: 'PATCH',
      path: `${id}`,
      body: JSON.stringify(updatedProduct),
    });
    return serverUpdatedProduct as ServerProduct;
  }

  public async delete(id: number) {
    const serverDeletedProduct = await this.apiFetch({
      method: 'DELETE',
      path: `${id}`,
    });
    return serverDeletedProduct as ServerProduct;
  }
}