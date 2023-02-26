import bgImg from '../../assets/images/hero-img.png';
import Btn from '../shared/Btn';

const HeroMain = () => {
  return (
    <section className="bg-[url('./assets/images/contact-bg.jpg')] bg-center py-20 px-4">
      <div className="grid grid-cols-2 max-w-6xl mx-auto items-center">
        <div className="mr-4">
          <h2 className="text-orange text-2xl mb-2">Our Speciality</h2>
          <h1 className="text-6xl font-bold text-white mb-1">
            Deliver<span className="text-orange">oo</span> Ch
            <span className="text-orange">ee</span>seburger
          </h1>
          <p className="text-white text-xl italic mt-3 font-light">
            Juicy chicken patty topped with crispy bacon, fresh salad, and
            melted cheese.
          </p>
          <p className="text-white text-lg h mt-6 mr-8 font-light">
            Our classic cheeseburger is the perfect choice for a satisfying
            meal. Made with fresh, high-quality ingredients and cooked to
            perfection, this burger is sure to please. Order now and experience
            the delicious taste of our classic cheeseburger.
          </p>
          <Btn variant="orange" className="mt-8 py-5 px-14">
            ORDER NOW
          </Btn>
        </div>
        <img src={bgImg} alt="" />
      </div>
    </section>
  );
};

export default HeroMain;
