const HotCombo = () => {
  return (
    <section className="HOT COMBOS">
      <div className="">
        <div className="--title mt-20 my-10 flex flex-col items-center">
          <h1 className="font-bold text-4xl text-black mb-4">
            Our Daily Deals
          </h1>
          <div className="w-16 h-1 bg-red-l rounded-full" />
        </div>
        <div className="--hot-combos-cards grid gap-5 grid-cols-2 max-w-6xl mx-auto">
          <div className="--hot-card flex flex-col items-center">
            <div className='w-full rounded-md py-10 px-20 bg-[url("./assets/images/hot-combo-img-1.jpg")] h-96'>
              <div className="bg-blue/60 rounded-md p-4 grid justify-items-center">
                <h1 className="text-5xl font-bold text-white">
                  Daily <span className="font-thin">Combo</span>
                </h1>
                <h2 className="italic text-orange text-lg my-2">
                  Truffle fries + Bacon Cheeseburger
                </h2>
                <div className="bg-red rounded-[50%] text-white p-4 w-28 h-28 mt-2">
                  <h1 className="text-xl text-center">Only</h1>
                  <div className="flex mx-1">
                    <p className="text-2xl">$</p>
                    <h2 className="text-5xl font-extrabold">10</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="--hot-card flex flex-col items-center">
            <div className='w-full rounded-md py-10 px-20 bg-[url("./assets/images/hot-combo-img-2.jpg")] h-96 '>
              <div className="bg-blue/60 rounded-md p-4 grid justify-items-center">
                <h1 className="text-5xl font-bold text-white">
                  Daily <span className="font-thin">Combo</span>
                </h1>
                <h2 className="italic text-orange text-lg my-2">
                  French Fry + Crispy Chicken Burger
                </h2>
                <div className="bg-orange rounded-[50%] text-white p-4 w-28 h-28 mt-2">
                  <h1 className="text-xl text-center">Only</h1>
                  <div className="flex mx-2">
                    <p className="text-2xl">$</p>
                    <h2 className="text-5xl font-extrabold">12</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCombo;
