import { Link } from 'react-router-dom';

const MenuHero = () => {
  return (
    <div className="--hero flex flex-col items-center justify-center bg-red py-24">
      <h1 className="text-white text-6xl">Menu</h1>
      <div className="flex gap-2 mt-4">
        <Link className="text-sm hover:text-orange" to="/">
          Home
        </Link>
        <div className="text-sm">/</div>
        <Link className="text-sm text-orange" to="/menu">
          Menu
        </Link>
      </div>
    </div>
  );
};
export default MenuHero;
