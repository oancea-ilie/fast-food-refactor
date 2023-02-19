export interface Children {
  children: JSX.Element | JSX.Element[];
}
export interface ID {
  id: number;
}

export interface NestError {
  statusCode: number;
  message: string;
  error: string;
}

export type ApiFetch = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  path?: string;
  body?: string;
};

// export enum ApiEntity {
//   PRODUCTS = 'products',
//   CUSTOMERS = 'customers',
// }
