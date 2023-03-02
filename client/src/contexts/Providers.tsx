import { ProductsProvider } from './ProductsCtx';
import { UserProvider } from './UserCtx';
import { BrowserRouter } from 'react-router-dom';
interface Props {
  children: JSX.Element | JSX.Element[];
}
const Providers = ({ children }: Props) => {
  return (
    <UserProvider>
      <ProductsProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ProductsProvider>
    </UserProvider>
  );
};
export default Providers;
