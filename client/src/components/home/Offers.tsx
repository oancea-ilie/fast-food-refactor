import { Link } from 'react-router-dom';

const Offers = () => {
  return (
    <section className="OFFERS">
      <div className="max-w-6xl grid grid-cols-3 gap-4 mx-auto pt-20">
        <div className='h-52 bg-[url("./assets/images/ofer-img-1.jpg")] rounded-md shadow-md flex flex-col items-end'>
          <div className="bg-red opacity-90 w-48 h-full p-4 flex flex-col items-start rounded-md rounded-tl-none rounded-bl-none">
            <div className="flex flex-col items-start">
              <h1 className="text-white font-bold text-2xl text-end">
                Pizza Calabria
              </h1>
              <p className="text-white italic mt-2">Mascarpone</p>
              <p className="text-white italic mt-1">Nduja Spicy</p>
            </div>
            <Link
              to="/"
              className="text-white flex items-end bg-orange hover:rounded-2xl mt-4 px-4 py-1 rounded"
            >
              Try It Now
            </Link>
          </div>
        </div>
        <div className='h-52 bg-[url("./assets/images/ofer-img-2.jpg")] rounded-md shadow-md'>
          <div className="opacity-90 h-full flex flex-col items-end">
            <div className="bg-red p-4 h-full w-48 flex flex-col items-start rounded-md rounded-tl-none rounded-bl-none">
              <div className=" flex flex-col items-start">
                <h1 className="text-orange font-bold text-2xl">
                  ICED, <br />
                  <span className="text-gray-400">COFFEE</span>
                </h1>
                <h2 className="text-white font-bold text-2xl">SUMMER</h2>
              </div>
              <Link
                to="/"
                className=" text-white text-end bg-orange hover:rounded-2xl mt-4 px-4 py-1 rounded"
              >
                Try It Now
              </Link>
            </div>
          </div>
        </div>
        <div className='h-52 bg-[url("./assets/images/ofer-img-3.jpg")] rounded-md shadow-md'>
          <div className="opacity-90 h-full flex flex-col items-end">
            <div className="bg-red w-48 h-full p-4 rounded-md rounded-tl-none rounded-bl-none">
              <h2 className="text-white text-xl font-bold">Get Your</h2>
              <h1 className="text-white font-light text-xl mt-1">
                FREE, <br />{' '}
                <span className="inline-block mt-2 italic text-orange text-lg">
                  French Fry
                </span>
              </h1>
              <Link
                to="/"
                className="text-white bg-orange hover:rounded-2xl mt-4 px-4 py-1 rounded"
              >
                Try It Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
