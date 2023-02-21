import { memo, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../utils/routes';
import deliveroo from '../../assets/images/deliveroo.png';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import { useWindowSize } from '../../hooks/useResize';

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const size = useWindowSize();
  const location = useLocation();
  const toggleMenu = (state: boolean) => setOpenMenu(state);

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
        className={`overlay fixed top-0 left-0 bg-black opacity-50 w-full h-full z-20 ${
          openMenu ? 'block' : 'hidden'
        }`}
        onClick={() => toggleMenu(false)}
      />
      <section className="bg-red drop-shadow-xl sticky top-0 left-0 z-10 w-full">
        <div className="flex p-4 lg:hidden justify-between max-w-3xl mx-auto items-center">
          <Link to="/">
            <img src={deliveroo} className="w-[130px]" alt="" />
          </Link>
          <div
            onClick={() => toggleMenu(true)}
            className="px-3 py-2 rounded-md transition-all duration-200 cursor-pointer text-white hover:text-orange"
          >
            <AiOutlineMenu className="" size={25} />
          </div>
        </div>
        <div className=" flex py-6 px-4 items-center text-white justify-between mx-auto lg:max-w-[75rem] 2xl:max-w-[86.25rem] max-lg:hidden">
          <Link to="/">
            <img src={deliveroo} className="w-[11.875rem]" alt="" />
          </Link>
          <nav className="flex gap-6 items-center">
            {routes.map(
              (route) =>
                route.display && (
                  <Link
                    className="hover:text-orange transition-all duration-200 text-xl"
                    to={route.path}
                    key={route.name}
                  >
                    {route.name}
                  </Link>
                )
            )}
            <Link
              to="/login"
              className="text-lg px-10 py-1 border rounded transition-all duration-200  border-white  hover:bg-white hover:text-red"
            >
              Login
            </Link>
            <div className="pl-4 border-l border-l-white">
              <h1 className="text-orange font-bold text-lg">Order now</h1>
              <p className="hover:text-orange transition-all text-2xl font-bold duration-200">
                1800 456 7890
              </p>
            </div>
          </nav>
        </div>
      </section>
      <section
        className={`responsive fixed top-0 right-0 z-30 h-screen bg-red flex-col w-56 text-white drop-shadow-xl ${
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
          className="mx-6 mt-6 text-lg text-center px-10 py-1 border rounded transition-all duration-200  border-white  hover:bg-white hover:text-red"
        >
          Login
        </Link>
        <nav className="flex flex-col gap-6 p-6">
          {routes.map(
            (route) =>
              route.display && (
                <Link
                  className="hover:text-orange transition-all duration-200 text-xl"
                  to={route.path}
                  key={route.name}
                >
                  {route.name}
                </Link>
              )
          )}
        </nav>
      </section>
    </>
  );
};
export default memo(Header);
