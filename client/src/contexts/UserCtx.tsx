import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { User } from '../interfaces/User';
import { UserContextI } from '../interfaces/UserCtx';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UserContext = createContext<UserContextI | null>(null);

const mockedUser: User = {
  id: 30,
  token: 'GEAQ!EZ22',
  name: 'Oancea Ilie',
  email: 'oancea@gmail.com',
  image:
    'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/00/00ca6c9c5343dddec8f3cdcf4474984552d439d1_full.jpg',
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  console.log('userCTX', user);
  const handleLogOut = useCallback(() => {
    setUser(undefined);
  }, []);

  const handleLogIn = useCallback(() => {
    setUser(mockedUser);
  }, []);

  useEffect(() => {
    setUser(mockedUser);
  }, []);

  const values = useMemo(
    () => ({ user, handleLogOut, handleLogIn }),
    [handleLogIn, handleLogOut, user]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used inside the User Provider');
  }
  return context;
};
