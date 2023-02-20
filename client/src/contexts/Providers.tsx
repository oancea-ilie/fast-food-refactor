import { ProductsProvider } from './ProductsCtx';
import { UsersProvider } from './UsersCtx';
import { BrowserRouter } from 'react-router-dom';
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Providers = ({ children }: Props) => {
  return (
    <UsersProvider>
      <ProductsProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ProductsProvider>
    </UsersProvider>
  );
};
export default Providers;
