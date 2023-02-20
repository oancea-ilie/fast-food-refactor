import LoadComp from './LoadComp';
import NoDataComp from './NoDataComp';

interface Props {
  children: JSX.Element | JSX.Element[];
  error: boolean;
  isLoading: boolean;
  data: unknown[];
}

const StateWrapper = ({ children, error, isLoading, data }: Props) => {
  if (error && !isLoading) return <div>Error!</div>;
  if (isLoading) return <LoadComp />;
  if (!isLoading && !error && data.length === 0) return <NoDataComp />;
  return <div>{children}</div>;
};

export default StateWrapper;
