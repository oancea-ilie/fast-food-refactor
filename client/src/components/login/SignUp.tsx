import { Link } from "react-router-dom";
import {RiUserSharedFill} from "react-icons/ri";
const SignUp = () => {
  return (
    <section className='REGISTER bg-red py-10 grid'>
      <RiUserSharedFill size={80} className="mx-auto mb-4 text-orange" />
      <h1 className='text-center text-white text-4xl'>Sign Up</h1>
      <div className="divider bg-orange h-[1px] w-[40px] mx-auto mb-8" />
      <div className="flex flex-col items-center gap-5">
        <input type="text" placeholder="Your name.." className="input input-secondary w-full max-w-xs text-red placeholder:text-red" />
        <input type="email" placeholder="Your email.." className="input input-secondary w-full max-w-xs text-red placeholder:text-red" />
        <input type="password" placeholder="Your password.." className="input input-secondary w-full max-w-xs text-red placeholder:text-red" />
        <input type="password" placeholder="Confirm your password.." className="input input-secondary w-full max-w-xs text-red placeholder:text-red" />
        <button className='btn btn-secondary text-black w-[320px] mx-auo'>Sign Up</button>
        <Link to='/login' className='link text-white hover:text-orange'>Already have an account?</Link>
      </div>
    </section>
  );
};
export default SignUp;