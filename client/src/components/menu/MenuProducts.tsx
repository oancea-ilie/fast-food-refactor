import { useState } from 'react';
import { ProductFilters } from '../../constants/productFilters';
import useProduct from '../../hooks/useProduct';
import ProductCard from '../home/ProductCard';

const MenuProducts = () => {
  const { products } = useProduct();

  const [activeFilter, setActiveFilter] = useState<string>(
    ProductFilters[0].name
  );

  const handleFilter = ({ name, query }: { name: string; query: string }) => {
    console.log(query);
    setActiveFilter(name);
  };

  return (
    <section className="--menu-products mb-10 mx-4">
      <div className="--products-header border-b-gray-400 border-b pb-10 mb-10 max-w-6xl mx-auto">
        <div className="--title mt-14 my-10 flex flex-col items-center">
          <h1 className="font-bold text-4xl text-black mb-4">Our Products</h1>
          <div className="w-16 h-1 bg-red-l rounded-full" />
        </div>
        <div className="filters flex gap-10 justify-center">
          {ProductFilters.map((filter) => (
            <button
              className={`bg-transparent text-black text-2xl font-medium hover:bg-transparent hover:text-red-l ${
                filter.name === activeFilter ? 'text-red-l' : ''
              }`}
              key={filter.name}
              onClick={() => handleFilter(filter)}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>
      <div className="--products-body max-w-6xl mx-auto grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};
export default MenuProducts;
