import { Link } from 'react-router-dom';

const AboutHero = () => {
  return (
    <section className="--hero flex flex-col items-center justify-center bg-[url('./assets/images/contact-bg.jpg')] bg-center py-24">
      <h1 className="text-white text-6xl">About</h1>
      <div className="flex gap-2 mt-4">
        <Link className="text-sm hover:text-orange" to="/">
          Home
        </Link>
        <div className="text-sm">/</div>
        <Link className="text-sm text-orange" to="/menu">
          About
        </Link>
      </div>
    </section>
  );
};
export default AboutHero;
