import bgImg from '../../assets/images/hero-img.png';

const HeroMain = () => {
  return (
    <section className="hero">
      <div className="container">
        <img loading="lazy" src={bgImg} alt="" />
        <div className="text">
          <h2>Hot Stuff</h2>
          <h1>Mexican Burger ...</h1>
          <p className="first">with bacon, tasty ham, pineapple and onion</p>
          <p className="italian">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            odio tempora, consequatur ullam quibusdam nostrum ut incidunt quas
            accusamus ducimus?
          </p>
          <a href="#">ORDER NOW</a>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;
