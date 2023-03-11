import { useState } from 'react';

const useProduct = () => {
  const [state, setState] = useState<boolean>(false);

  return <div>useProduct</div>;
};
export default useProduct;
