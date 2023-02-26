import bgImg from '../../assets/images/hero-img.png';
import Btn from '../shared/Btn';

const HeroMain = () => {
  return (
    <section className="bg-red py-20 px-4">
      <div className="grid grid-cols-2 max-w-6xl mx-auto items-center">
        <div className="mr-4">
          <h2 className="text-orange text-3xl">Hot Stuff</h2>
          <h1 className="text-6xl font-bold text-white mb-1">Mexican Burger</h1>
          <p className="text-white text-lg italic mt-4">
            with bacon, tasty ham, pineapple and onion
          </p>
          <p className="text-white text-lg h mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odio tempora, consequatur ullam quibusdam nostrum ut incidunt quas
            accusamus ducimus? odio tempora, consequatur ullam quibusdam nostrum
            ut incidunt quas
          </p>
          <Btn variant="white" className="mt-6 py-5 px-14">
            ORDER NOW
          </Btn>
        </div>
        <img src={bgImg} alt="" />
      </div>
    </section>
  );
};

export default HeroMain;
