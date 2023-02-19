import { memo } from 'react';
import { useProducts } from '../contexts/productsCtx';

const Header = () => {
  const productsCtx = useProducts();
  console.log('Products Context', productsCtx);

  const addProduct = () => {
    productsCtx.methods.addProduct({ description: 'ceva', price: 30, name: 'name' });
  };

  const removeProduct = () => {
    productsCtx.methods.removeProduct(productsCtx.products[0]);
  };
  const updateProduct = () => {
    productsCtx.methods.updateProduct(productsCtx.products[0], {
      name: 'nou name',
      description: 'nou',
      price: 50,
    });
  };

  return (
    <div>
      Header
      <button onClick={addProduct}>Add Product</button>
      <button onClick={removeProduct}>Remove Product</button>
      <button onClick={updateProduct}>Update Product</button>
    </div>
  );
};
export default memo(Header);
