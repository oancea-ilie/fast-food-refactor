import { ProductsProvider } from './ProductsCtx';
import { UsersProvider } from './UsersCtx';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const Providers = ({ children }: Props) => {
  return (
    <UsersProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </UsersProvider>
  );
};
export default Providers;
