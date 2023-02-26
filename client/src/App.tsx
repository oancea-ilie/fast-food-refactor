import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ScrollToTop from './components/shared/ScrollToTop';
import { routes } from './utils/routes';

const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
