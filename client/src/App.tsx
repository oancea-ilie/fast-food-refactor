import { useEffect } from 'react';
import burger from './assets/burger.png';
import Header from './components/Header';
import StateWrapper from './components/shared/StateWrapper';
import { useProduct } from './contexts/ProductsCtx';

const App = () => {
  console.log('App rendered!');
  const productsCtx = useProduct();

  useEffect(() => {
    productsCtx.methods.getProducts();
  }, []);

  return (
    <div className="">
      <Header />
      App:
      <StateWrapper
        data={productsCtx.products}
        error={productsCtx.error}
        isLoading={productsCtx.isLoading}
      >
        {productsCtx.products.map((item) => (
          <div key={item?.id}>
            <img src={burger} alt="burger" width={100} height={100} />
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <div>{item.stock}</div>
          </div>
        ))}
      </StateWrapper>
    </div>
  );
};

export default App;
