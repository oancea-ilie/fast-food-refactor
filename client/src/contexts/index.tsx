import { ProductsProvider } from './productsCtx';
import { UserProvider } from './userContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const Providers = ({ children }: Props) => {
  return (
    <UserProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UserProvider>
  );
};
export default Providers;
