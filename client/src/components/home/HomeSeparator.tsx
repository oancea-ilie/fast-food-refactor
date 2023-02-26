import Btn from '../shared/Btn';

const HomeSeparator = () => {
  return (
    <section className="SEPARATOR ">
      <div className='h-[450px] bg-[url("./assets/images/breaker-1.jpg")] bg-right p-14 flex flex-col items-center justify-center'>
        <div className="">
          <div className="flex items-center">
            <h2 className="text-white italic text-2xl font-light">
              Exclusive Offer
            </h2>
            <div className="bg-white w-28 h-[1px] rounded-full ml-4" />
          </div>
          <h1 className="text-7xl my-8 font-extrabold text-white">
            Veggie Fun Pizza
          </h1>
          <div className="flex">
            <h2 className="text-red text-4xl mt-4">$</h2>
            <div className="flex flex-col justify-center">
              <h1 className="text-white text-6xl">12</h1>
              <h2 className="text-white text-center text-xl font-semibold">
                EACH
              </h2>
            </div>
            <ul className="ml-10 flex flex-col gap-1">
              <li className="text-orange text-xl"> - Chicken Halon</li>
              <li className="text-orange text-xl"> - Summer Pizza</li>
              <li className="text-orange text-xl"> - Veggie Lover</li>
            </ul>
          </div>
          <Btn variant="red" className="mt-6 py-5 px-14">
            ORDER NOW
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default HomeSeparator;
