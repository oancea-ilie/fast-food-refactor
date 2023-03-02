import { User } from './User';

export interface UserContextI {
  user: User | undefined;
  handleLogOut: () => void;
  handleLogIn: () => void;
}
