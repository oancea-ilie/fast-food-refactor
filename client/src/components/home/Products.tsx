import { useEffect, useState } from 'react';

const ProductFilters = [
  { name: 'All', query: '/' },
  { name: 'Pizza', query: '/pizza' },
  { name: 'Burgers', query: '/burgers' },
  { name: 'Fries', query: '/fries' },
  { name: 'Combo', query: '/combo' },
  { name: 'Drinks', query: '/drinks' },
];
const Products = () => {
  const [products, setProducts] = useState([]);

  const [activeFilter, setActiveFilter] = useState<string>(
    ProductFilters[0].name
  );

  const handleFilter = ({ name, query }: { name: string; query: string }) => {
    console.log(query);
    setActiveFilter(name);
  };

  return (
    <section className="PRODUCTS">
      <div className="header border-b-gray-400 border-b pb-10 max-w-6xl mx-auto">
        <div className="--title mt-20 mb-10 flex flex-col items-center">
          <h1 className="font-bold text-4xl text-black mb-4">Our Products</h1>
          <div className="w-16 h-1 bg-red-l rounded-full" />
        </div>
        <div className="filters flex gap-10 justify-center">
          {ProductFilters.map((filter) => (
            <button
              className={`bg-transparent text-2xl font-medium hover:bg-transparent hover:text-red-l ${
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
      <div className="body" />
    </section>
  );
};

export default Products;
