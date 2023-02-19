import { useEffect, useState } from 'react';
import { ProductsApi } from './api/products';
import burger from './assets/burger.png';
import Header from './components/Header';
import { useProducts } from './contexts/productsCtx';
import { useUser } from './contexts/userContext';

const App = () => {
  console.log('App rendered!');
  const [state, setState] = useState<any[]>([]);

  const userCtx = useUser();
  const productsCtx = useProducts();

  const getProducts = async () => {
    const productsApi = new ProductsApi();
    console.log(await productsApi.findById(15));
    setState(await productsApi.find());
  };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div className="">
      <Header />
      App
      <div>
        <button
          onClick={() => {
            userCtx?.updateUser({ email: 'ceva', name: 'test' });
          }}
        >
          Set User
        </button>
        {state.map((item) => (
          <div key={item?.id}>
            <div>
              <img src={burger} alt="burger" width={100} height={100} />
            </div>
            <div>{item?.name}</div>
            <div>{item?.description}</div>
            <div>{item?.price}</div>
            <div>{item?.stock}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
