import { MdOutlineFavoriteBorder } from 'react-icons/md';
import img from '../../assets/images/burger-6.png';

const ProductCard = () => {
  return (
    <div className="card rounded-md bg-white shadow-xl">
      <figure><img src={img} className="max-w-full" alt="Shoes" /></figure>
      <div className="card-body p-4">
        <h2 className="card-title text-black">Burger!</h2>
        <p className='text-black mb-4'>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
