import { memo } from 'react';
import { useProduct } from '../contexts/productsCtx';

const mockedProduct = { description: 'des', price: 30, name: 'name', stock: 10 };

const Header = () => {
  console.log('Header rendered!');
  const productsCtx = useProduct();

  const addProduct = () => {
    productsCtx.methods.addProduct(mockedProduct);
  };

  const removeProduct = () => {
    // productsCtx.methods.removeProduct(productsCtx.products[0]);
  };
  const updateProduct = () => {
    // productsCtx.methods.updateProduct(productsCtx.products[0], mockedProduct);
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
