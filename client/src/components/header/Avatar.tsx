import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContextI } from '../../interfaces/UserCtx';

interface Props {
  userCtx: UserContextI;
}
const Avatar = ({ userCtx }: Props) => {
  const navigate = useNavigate();

  const [items] = useState<number>(9);

  return (
    <div className="dropdown dropdown-bottom flex items-center">
      <div className="indicator">
        <div className="avatar">
          <div className="w-12 rounded-full border-2 border-transparent hover:border-white transition-all duration-200">
            <span className="indicator-item badge badge-secondary">
              {items}
            </span>
            <img src={userCtx.user?.image} className="relative" />
            <div
              tabIndex={0}
              className="overlay absolute top-0 left-0 w-12 h-full rounded-full cursor-pointer z-20"
            />
          </div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-red rounded-md w-52 py-3 z-40"
      >
        <div
          onClick={() => navigate('/cart')}
          className="flex items-center justify-between hover:bg-slate-50/20 rounded-md p-3 cursor-pointer"
        >
          <p>View Cart</p>
          <p className="text-xs text-orange">{items} items</p>
        </div>
        <Link to="/account" className="hover:bg-slate-50/20 rounded-md p-3">
          Account
        </Link>
        <button
          onClick={userCtx.handleLogOut}
          className="hover:bg-slate-50/20 rounded-md p-3 text-start"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
export default Avatar;
