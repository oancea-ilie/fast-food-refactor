const HotCombo = () => {
  return (
    <section className="HOT COMBOS">
      <div className="">
        <div className="--title mt-20 my-10 flex flex-col items-center">
          <h1 className="font-bold text-4xl text-black mb-4">
            Our Hot Combo Items
          </h1>
          <div className="w-16 h-1 bg-red-l rounded-full" />
        </div>
        <div className="--hot-combos-cards grid gap-5 grid-cols-2 max-w-6xl mx-auto">
          <div className="--hot-card flex flex-col items-center">
            <div className='w-full rounded-md py-10 px-20 bg-[url("./assets/images/hot-combo-img-1.jpg")] h-96'>
              <h1 className="text-5xl font-bold text-white">
                Deal of <span className="font-thin">Day</span>
              </h1>
              <h2 className="font-light italic text-orange text-2xl my-2">
                Tasty Combo
              </h2>
              <div className="bg-red rounded-[50%] text-white p-4 w-28 h-28">
                <h1 className="text-xl text-center">Only</h1>
                <div className="flex">
                  <p className="text-2xl">$</p>
                  <h2 className="text-5xl font-extrabold">25</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="--hot-card flex flex-col items-center">
            <div className='w-full rounded-md py-10 px-20 bg-[url("./assets/images/hot-combo-img-1.jpg")] h-96'>
              <h1 className="text-5xl font-bold text-white">
                Deal of <span className="font-thin">Day</span>
              </h1>
              <h2 className="font-light italic text-orange text-2xl my-2">
                Tasty Combo
              </h2>
              <div className="bg-orange rounded-[50%] text-white p-4 w-28 h-28">
                <h1 className="text-xl text-center">Only</h1>
                <div className="flex">
                  <p className="text-2xl">$</p>
                  <h2 className="text-5xl font-extrabold">25</h2>
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
