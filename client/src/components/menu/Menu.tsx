import Products from "../home/Products";
import MenuHero from "./MenuHero";
import MenuProducts from "./MenuProducts";

const Menu = () => {
  return (
    <div className="MENU bg-stone-200 pb-20">
      <MenuHero />
      <Products />
      <MenuProducts />
    </div>
  );
};
export default Menu;