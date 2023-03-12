import { createContext, useMemo, useState } from 'react';
import { User } from '../interfaces/User';

interface Props {
  children: JSX.Element | JSX.Element[];
}
type UserContextI = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};
export const UserContext = createContext<UserContextI | null>(null);

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | undefined>(undefined);

  const values = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
