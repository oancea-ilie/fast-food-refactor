import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import deliveroo from '../../assets/images/deliveroo.png';
import { AiOutlineMenu } from 'react-icons/ai';
import { useWindowSize } from '../../hooks/useResize';
import HeaderResponsive from './HeaderResponsive';

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const size = useWindowSize();
  const location = useLocation();
  const toggleMenu = (state: boolean) => setOpenMenu(state);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (openMenu) {
      setOpenMenu(false);
    }
  }, [location]);

  useEffect(() => {
    if (size[0] > 1024 && openMenu) {
      setOpenMenu(false);
    }
  }, [size]);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', () => toggleMenu(false));
    } else {
      document.body.style.overflow = 'unset';
      document.addEventListener('keydown', () => toggleMenu(false));
    }
  }, [openMenu]);

  return (
    <>
      <div
        className={`OVERLAY fixed top-0 left-0 bg-black opacity-50 w-full h-full z-20 ${
          openMenu ? 'block' : 'hidden'
        }`}
        onClick={() => toggleMenu(false)}
      />
      <section className="HEADER bg-red drop-shadow-xl sticky top-0 left-0 z-20 w-full px-4">
        <div className="flex py-4 lg:hidden justify-between max-w-6xl mx-auto items-center">
          <Link to="/">
            <img src={deliveroo} className="w-[130px]" alt="" />
          </Link>
          <div
            onClick={() => toggleMenu(true)}
            className="px-3 py-2 transition-all duration-200 cursor-pointer text-white hover:text-orange"
          >
            <AiOutlineMenu className="" size={25} />
          </div>
        </div>
        <div className="min-[0px]:hidden lg:flex py-4 items-center text-white justify-between mx-auto max-w-6xl">
          <Link to="/">
            <img src={deliveroo} className="w-[170px]" alt="" />
          </Link>
          <nav className="flex gap-6 items-center">
            {routes.map(
              (route) =>
                route.display && (
                  <Link
                    className={`hover:text-orange text-xl font-light ${
                      isActive(route.path) ? 'text-orange' : ''
                    }`}
                    to={route.path}
                    key={route.name}
                  >
                    {route.name}
                  </Link>
                )
            )}
            <Link
              to="/login"
              className={`text-lg font-light px-10 py-1 border rounded border-white hover:bg-white hover:text-red 
                ${isActive('/login') ? 'bg-white text-red' : ''}`}
            >
              Login
            </Link>
            <div className="pl-4 border-l border-l-white">
              <h1 className="text-orange font-bold text-lg">Order now</h1>
              <p className="hover:text-orange transition-all text-xl cursor-default font-bold duration-200">
                1800 456 7890
              </p>
            </div>
          </nav>
        </div>
      </section>
      <HeaderResponsive
        toggleMenu={toggleMenu}
        openMenu={openMenu}
        location={location.pathname}
      />
    </>
  );
};
export default memo(Header);
