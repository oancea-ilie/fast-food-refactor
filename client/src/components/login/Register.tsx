import { Link } from 'react-router-dom';
import { RiUserSharedFill } from 'react-icons/ri';
import Btn from '../shared/Btn';
import login from '../../assets/svgs/login.svg';

const Register = () => {
  return (
    <section
      className="LOGIN bg-red py-7 grid"
      style={{ backgroundImage: `url("${login}")` }}
    >
      <RiUserSharedFill size={80} className="mx-auto mb-6 text-orange" />
      <h1 className="text-center text-white text-4xl">Register</h1>
      <div className="divider bg-orange h-[1px] w-[40px] mx-auto mb-8" />
      <div className="flex flex-col items-center gap-6 max-w-xs mx-auto w-full">
        <input
          type="text"
          className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm focus:border-transparent"
          placeholder="Name"
        />
        <input
          type="text"
          className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm focus:border-transparent"
          placeholder="Email"
        />
        <input
          type="password"
          className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm focus:border-transparent"
          placeholder="Password"
        />
        <input
          type="password"
          className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm focus:border-transparent"
          placeholder="Confirm password"
        />
        <Btn variant="orange" className="py-3 px-10 w-full">
          Register
        </Btn>
        <Link to="/login" className="link text-white hover:text-orange">
          You already have an account?
        </Link>
      </div>
    </section>
  );
};
export default Register;
