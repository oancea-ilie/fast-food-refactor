import Btn from '../shared/Btn';

const Offers = () => {
  return (
    <section className="OFFERS mx-4">
      <div className="max-w-6xl grid grid-cols-3 gap-4 mx-auto pt-20">
        <div className='h-52 bg-[url("./assets/images/ofer-img-1.jpg")] rounded-md shadow-md flex flex-col items-end'>
          <div className="bg-red/70 w-36 h-full p-4 flex flex-col items-start rounded-md rounded-tl-none rounded-bl-none">
            <div className="flex flex-col items-start">
              <h1 className="text-white font-bold text-2xl">Pizza Calabria</h1>
              <p className="text-white italic mt-2">with ricotta</p>
            </div>
            <Btn variant="small" className="py-1 px-3 mt-4">
              Try It Now
            </Btn>
          </div>
        </div>
        <div className='h-52 bg-[url("./assets/images/iced-coffee.webp")] rounded-md shadow-md bg-cover bg-left'>
          <div className="h-full flex flex-col items-end">
            <div className="bg-red/90 p-4 h-full w-36 flex flex-col items-start rounded-md rounded-tl-none rounded-bl-none">
              <div className=" flex flex-col items-start">
                <h1 className="text-orange font-bold text-2xl">
                  ICED, <br />
                  <span className="text-gray-400">COFFEE</span>
                </h1>
                <h2 className="text-white font-bold text-2xl">SUMMER</h2>
              </div>
              <Btn variant="small" className="py-1 px-3 mt-4">
                Try It Now
              </Btn>
            </div>
          </div>
        </div>
        <div className='h-52 bg-[url("./assets/images/ofer-img-3.jpg")] bg-cover bg-left rounded-md shadow-md'>
          <div className="h-full flex flex-col items-end">
            <div className="bg-red/80 w-36 h-full p-4 rounded-md rounded-tl-none rounded-bl-none">
              <h2 className="text-white text-xl font-bold">Get</h2>
              <h1 className="text-white font-light text-xl mt-1">
                Your <br />{' '}
                <span className="inline-block mt-2 italic text-orange text-lg">
                  French Fry
                </span>
              </h1>
              <Btn variant="small" className="py-1 px-3 mt-4">
                Try It Now
              </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
