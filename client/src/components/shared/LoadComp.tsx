import { useState } from 'react';

const LoadComp = () => {
  const [state, setState] = useState<boolean>(false);

  return <div>Loading..</div>;
};
export default LoadComp;
