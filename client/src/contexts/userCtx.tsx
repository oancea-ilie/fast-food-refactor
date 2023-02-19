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

export const UserContext = createContext<UserContext | null>(null);

export const UserProvider = ({ children }: Props) => {
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

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
