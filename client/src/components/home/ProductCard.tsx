import img from '../../assets/images/burger-6.png';
import Btn from '../shared/Btn';
import { BsFillCartPlusFill } from 'react-icons/bs';

const ProductCard = () => {
  return (
    <div className="card rounded-md bg-white shadow-xl">
      <img src={img} className="max-w-full" alt="Shoes" />
      <div className="card-body p-4">
        <h2 className="card-title text-black">Burger!</h2>
        <p className="text-black mb-4">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Btn variant="product" className="px-6 py-3 font-light">
            <BsFillCartPlusFill />
          </Btn>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
