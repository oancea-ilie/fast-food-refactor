import ErrorCom from './ErrorCom';
import LoadComp from './LoadComp';
import NoDataComp from './NoDataComp';

interface Props {
  children: JSX.Element | JSX.Element[];
  error: boolean;
  isLoading: boolean;
  length: number;
}

const StateWrapper = ({ children, error, isLoading, length }: Props) => {
  if (error && !isLoading) return <ErrorCom />;
  if (isLoading) return <LoadComp />;
  if (!isLoading && !error && length === 0) return <NoDataComp />;
  return <>{children}</>;
};

export default StateWrapper;
