import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Btn from '../shared/Btn';
import login from '../../assets/svgs/login.svg';

const Login = () => {
  return (
    <section
      className="LOGIN py-24 grid"
      style={{ backgroundImage: `url("${login}")` }}
    >
      <FaUserAlt size={80} className="mx-auto mb-6 text-orange" />
      <h1 className="text-center text-white text-4xl">Login</h1>
      <div className="divider bg-orange h-[1px] w-[40px] mx-auto mb-8" />
      <div className="flex flex-col items-center gap-6 max-w-xs mx-auto w-full">
        <input
          type="text"
          className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm focus:border-transparent"
          placeholder="Name"
        />
        <input
          type="password"
          className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm focus:border-transparent"
          placeholder="Password"
        />
        <Btn variant="orange" className="py-3 px-10 w-full">
          Login
        </Btn>
        <Link to="/register" className="link text-white hover:text-orange">
          You are not registered yet?
        </Link>
      </div>
    </section>
  );
};
export default Login;
