import { memo, useState } from 'react';
import { useProducts } from '../contexts/productsCtx';

const Header = () => {
  const [state, setState] = useState<boolean>(false);
  const productsCtx = useProducts();
  console.log('header');

  return (
    <div>
      Header
      <button
        onClick={() => {
          productsCtx?.addProduct({ description: 'ceva', price: 30, name: 'name' });
        }}
      >
        Set Product
      </button>
    </div>
  );
};
export default memo(Header);
