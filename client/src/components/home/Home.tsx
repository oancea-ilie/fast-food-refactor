import Delivery from './Delivery';
import HeroMain from './HeroMain';
import HomeSeparator from './HomeSeparator';
import HotCombo from './HotCombo';
import Offers from './Offers';
import Products from './Products';
import Services from './Services';

const Home = () => {
  return (
    <main className="main-home">
      <HeroMain />
      <Offers />
      <Products />
      <HomeSeparator />
      <HotCombo />
      <Delivery />
      <Services />
    </main>
  );
};

export default Home;
