import delivery1 from '../../assets/images/delivery-img-1.png';
import Btn from '../shared/Btn';

const Delivery = () => {
  return (
    <section className="DELIVERY my-20 bg-red ">
      <div className="grid grid-cols-2 max-w-6xl mx-auto py-12 items-center">
        <img src={delivery1} style={{ width: '450px' }} alt="" />
        <div className="">
          <h2 className="italic font-light text-3xl mb-5 text-white">
            We Guarantee
          </h2>
          <h1 className="text-6xl font-extrabold text-white mb-5">
            30 Minute Delivery
          </h1>
          <p className="text-xl text-white">
            If you’re having a meeting, working late at night and need an extra
            push.
          </p>
          <p className="text-xl mt-4 text-white">
            Let us know and we will be there.
          </p>
          <Btn variant="orange" className="py-5 px-14 mt-6">
            ORDER NOW
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
