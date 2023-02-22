import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Props {
  openMenu: boolean;
  toggleMenu: (state: boolean) => void;
  location: string;
}
const HeaderResponsive = ({ openMenu, toggleMenu, location }: Props) => {
  const isActive = (path: string) => location === path;

  return (
    <section
      className={`HEADER-RESPONSIVE fixed top-0 right-0 z-30 h-screen bg-red flex-col w-56 text-white drop-shadow-xl ${
        openMenu ? 'flex' : 'hidden'
      }`}
    >
      <div className="p-5 flex justify-end" onClick={() => toggleMenu(false)}>
        <AiOutlineCloseCircle
          size={32}
          className="hover:text-orange cursor-pointer transition-all duration-200"
        />
      </div>
      <div className="border-t-white border-t px-6 pt-6">
        <h1 className="text-orange font-bold text-lg">Order now</h1>
        <p className="hover:text-orange transition-all text-2xl font-bold duration-200">
          1800 456 7890
        </p>
      </div>
      <Link
        to="/login"
        className={`mx-6 mt-6 text-lg text-center px-10 py-1 border rounded border-white  hover:bg-white hover:text-red
            ${isActive('/login') ? 'bg-white text-red' : ''}`}
      >
        Login
      </Link>
      <nav className="flex flex-col gap-6 p-6">
        {routes.map(
          (route) =>
            route.display && (
              <Link
                className={`hover:text-orange text-xl 
                    ${isActive(route.path) ? 'text-orange' : ''}`}
                to={route.path}
                key={route.name}
              >
                {route.name}
              </Link>
            )
        )}
      </nav>
    </section>
  );
};
export default HeaderResponsive;
