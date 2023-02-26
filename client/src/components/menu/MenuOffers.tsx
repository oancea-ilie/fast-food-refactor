const MenuOffers = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      <div className='bg-[url("./assets/images/menu-1.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Non Veg Chees Burger
            </h1>
            <p className="text-white leading-7 mb-4 mr-20">
              Completely synergize resource taxing relation ships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$5.99</h1>
            <button className="bg-red font-bold text-white p-4 tracking-[0.3rem] hover:bg-white hover:text-red">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[url("./assets/images/menu-2.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Guardian Spicy Burger
            </h1>
            <p className="text-white leading-7  mb-4 mr-20">
              Completely synergize resource taxing relation ships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$7.99</h1>
            <button className="bg-red text-white p-4 tracking-[0.3rem] font-bold hover:bg-white hover:text-red">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[url("./assets/images/menu-3.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Magrathan Chees Pizza
            </h1>
            <p className="text-white leading-7 mb-4 mr-20">
              Completely synergize resource taxing relation ships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$8.99</h1>
            <button className="bg-red text-white p-4 tracking-[0.3rem] font-bold hover:bg-white hover:text-red">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[url("./assets/images/menu-4.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Sandwitch Spicy Burger
            </h1>
            <p className="text-white leading-7 mr-20 mb-4">
              Completely synergize resource taxing relation ships via premier
              niche markets. Professionally cultivate one-to-one customer
              service.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$4.99</h1>
            <button className="bg-red text-white p-4 tracking-[0.3rem] font-bold hover:bg-white hover:text-red">
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuOffers;
