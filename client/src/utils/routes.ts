import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import Home from '../components/home/Home';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Menu from '../components/menu/Menu';

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
    component: Menu,
  },
  {
    path: '/about',
    name: 'About Us',
    display: true,
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    display: true,
    component: Contact,
  },
  {
    path: '/login',
    name: 'Login',
    display: false,
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    display: false,
    component: Register,
  },
];
