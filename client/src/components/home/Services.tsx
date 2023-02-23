import service1 from '../../assets/images/service-icon-1.png';
import service2 from '../../assets/images/service-icon-2.png';
import service3 from '../../assets/images/service-icon-3.png';
import service4 from '../../assets/images/service-icon-4.png';

const Services = () => {
  return (
    <section className="SERVICES max-w-6xl mx-auto">
      <div className="bg-white grid grid-cols-4 px-10 py-20 gap-10 rounded-md shadow-md  ">
        <div className="flex flex-col items-center">
          <img
            src={service1}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md text-center my-2">
            Free shipping on first order
          </h1>
          <p className="text-center text-neutral font-light">
            Sign up for updates and get free shipping
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={service2}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md  text-center my-2">
            Best Taste Guarantee
          </h1>
          <p className="text-center text-neutral font-light">
            We use best ingredients to cook the taste food.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={service3}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md text-center my-2">
            Variety of Dishes
          </h1>
          <p className="text-center text-neutral font-light">
            We give variety of dishes, deserts, and drinks
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={service4}
            className="w-[110px] flex items-center justify-center"
            alt=""
          />
          <h1 className="font-extrabold text-neutral text-md text-center my-2">
            25 Minutes Delivery
          </h1>
          <p className="text-center text-neutral font-light">
            We deliver your food at your door that you order
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
