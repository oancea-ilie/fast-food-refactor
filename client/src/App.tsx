import { useEffect, useState } from 'react';
import { ProductsApi } from './api/products';

const App = () => {
  const [state, setState] = useState<any[]>([]);

  const getProducts = async () => {
    const productsApi = new ProductsApi();
    setState(await productsApi.find());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="">
      App
      <div>
        {state.map((item) => (
          <div key={item?.id}>{item?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
