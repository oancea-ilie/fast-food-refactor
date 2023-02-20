import { useState } from 'react';

const NoDataComp = () => {
  const [state, setState] = useState<boolean>(false);

  return <div>No Data to display right now...</div>;
};
export default NoDataComp;
