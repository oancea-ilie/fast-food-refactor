import Btn from '../shared/Btn';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { Product } from '../../interfaces/Product';
import Burger from '../../../../products/product-burger-1.png';
interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card rounded-md shadow-md">
      <img
        src={Burger}
        className="max-w-full h-[200px] object-cover w-full"
        alt="Shoes"
      />
      <div className="card-body p-4">
        <h2 className="card-title text-black">{product.name}</h2>
        <p className="text-black mb-4">{product.description}</p>
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
