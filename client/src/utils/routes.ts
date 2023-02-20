import Home from '../components/home/Home';

type Route = {
  path: string;
  name: string;
  display: boolean;
  component: () => JSX.Element;
};
export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    display: true,
    component: Home,
  },
  {
    path: '/menu',
    name: 'Menu',
    display: true,
    component: Home,
  },
  {
    path: '/about',
    name: 'About Us',
    display: true,
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    display: true,
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    display: false,
    component: Home,
  },
  {
    path: '/logout',
    name: 'logout',
    display: false,
    component: Home,
  },
];
