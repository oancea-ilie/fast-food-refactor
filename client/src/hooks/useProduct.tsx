import { useContext } from 'react';
import { ProductApi } from '../api/productApi';
import { ProductsContext } from '../contexts/ProductsCtx';
import { Product } from '../interfaces/Product';

const useProduct = () => {
  const productsCtx = useContext(ProductsContext);
  if (!productsCtx) {
    throw new Error('useProducts must be used inside the Products Provider');
  }
  const {
    products,
    setProducts,
    error,
    fetchProducts,
    isLoading,
    setError,
    setIsLoading,
  } = productsCtx;

  const productApi = new ProductApi();

  const addProduct = async (newProduct: Product) => {
    try {
      setIsLoading(true);
      const createdProduct = await productApi.create(newProduct);

      setProducts((products) => [createdProduct, ...products]);
    } catch (e) {
      setError(true);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProduct = async (id: number, updatedProduct: Product) => {
    try {
      setIsLoading(true);
      const serverUpdatedProduct = await productApi.update(id, updatedProduct);
      setProducts((products) =>
        products.map((product) =>
          product._id === serverUpdatedProduct._id
            ? serverUpdatedProduct
            : product
        )
      );
    } catch (e) {
      setError(true);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteProduct = async (id: number) => {
    try {
      setIsLoading(true);
      const serverDeletedProduct = await productApi.delete(id);

      setProducts((products) =>
        products.filter((p) => p._id === serverDeletedProduct._id)
      );
    } catch (e) {
      setError(true);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    fetchProducts,
    error,
    isLoading,
    addProduct,
    deleteProduct,
    updateProduct,
  };
};

export default useProduct;
