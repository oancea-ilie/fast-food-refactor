import MenuHero from './MenuHero';
import MenuOffers from './MenuOffers';
import MenuProducts from './MenuProducts';

const Menu = () => {
  return (
    <div className="MENU bg-stone-50 pb-20">
      <MenuHero />
      <MenuProducts />
      <MenuOffers />
    </div>
  );
};
export default Menu;
