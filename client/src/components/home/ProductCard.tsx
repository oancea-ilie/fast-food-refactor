import img from '../../assets/images/burger-6.png';
import Btn from '../shared/Btn';

const ProductCard = () => {
  return (
    <div className="card rounded-md bg-white shadow-xl">
      <figure>
        <img src={img} className="max-w-full" alt="Shoes" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-black">Burger!</h2>
        <p className="text-black mb-4">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Btn variant="product" className="px-4 py-2 font-light">
            Buy Now
          </Btn>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
