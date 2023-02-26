import service1 from '../../assets/images/service-icon-1.png';
import service2 from '../../assets/images/service-icon-2.png';
import service3 from '../../assets/images/service-icon-3.png';
import service4 from '../../assets/images/service-icon-4.png';

const Services = () => {
  return (
    <section className="SERVICES max-w-6xl mx-auto">
      <div className="grid grid-cols-4 px-10 py-20 gap-10 rounded-md shadow-lg border-[0.5px] border-orange">
        <div className="flex flex-col items-center">
          <img
            src={service1}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md text-center my-2">
            Free shipping
          </h1>
          <p className="text-center text-neutral font-light">
            Get your first tasty order for free!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={service2}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md  text-center my-2">
            High-quality ingredients
          </h1>
          <p className="text-center text-neutral font-light">
            We use only the freshest, top-quality ingredients.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={service3}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md text-center my-2">
            A variety dishes
          </h1>
          <p className="text-center text-neutral font-light">
            Explore our wide range of delicious dishes.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={service4}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md text-center my-2">
            Fast, 25-minute delivery
          </h1>
          <p className="text-center text-neutral font-light">
            Satisfy your cravings in just 25 minutes or less!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
