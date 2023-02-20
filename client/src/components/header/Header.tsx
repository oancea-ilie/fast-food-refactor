import { memo } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import Logo2 from '../../assets/images/logo-2.png';

const Header = () => {
  return (
    <section className="header-login">
      <div className="container">
        <Link to="/">
          <img src={Logo2} alt="" width={70} />
        </Link>
        <nav className="flex gap-4 items-center pr-4">
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
            className=" px-6 py-1 border rounded transition-all duration-200  border-white  hover:bg-white hover:text-red"
          >
            Login
          </Link>
          <div className="pl-4 border-l border-l-white">
            <h1 className="text-orange font-bold">Order now</h1>
            <p className="hover:text-orange transition-all duration-200 cursor-pointer">
              1800 456 7890
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};
export default memo(Header);
