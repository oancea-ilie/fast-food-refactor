import { useContext } from 'react';
import { UserContext } from '../contexts/UserCtx';
import { User } from '../interfaces/User';

// const mockedUser: User = {
//   id: 30,
//   token: 'GEAQ!EZ22',
//   name: 'Oancea Ilie',
//   email: 'oancea@gmail.com',
//   image: 'https://xsgames.co/randomusers/avatar.php?g=male',
// };

const useUser = () => {
  const userCtx = useContext(UserContext);
  if (!userCtx) {
    throw new Error('useUser must be used inside the User Provider');
  }
  const { user, setUser } = userCtx;

  const updateUser = (newUser: User) => {
    setUser(newUser);
  };

  const logOut = () => {
    setUser(undefined);
  };

  return {
    user,
    updateUser,
    logOut,
  };
};
export default useUser;
