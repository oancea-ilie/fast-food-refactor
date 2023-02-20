import { isEqual } from 'lodash';
import { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface User {
  name: string;
  email: string;
}
interface Props {
  children: JSX.Element | JSX.Element[];
}

interface UserContext {
  user: User | null;
  updateUser: (newUser: User) => void;
}

interface User {
  name: string;
  email: string;
}

export const UsersContext = createContext<UserContext | null>(null);

export const UsersProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  const verifySameUser = useCallback((newUser: User) => isEqual(newUser, user), [user]);

  const updateUser = useCallback(
    (newUser: User) => {
      if (!verifySameUser(newUser)) {
        setUser(newUser);
      }
    },
    [verifySameUser]
  );

  const values = useMemo(() => ({ user, updateUser }), [updateUser, user]);

  return <UsersContext.Provider value={values}>{children}</UsersContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUser must be used inside the User Provider');
  }
  return context;
};
