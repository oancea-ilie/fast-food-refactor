import AboutCards from './AboutCards';
import AboutChef from './AboutChef';
import AboutDivider from './AboutDivider';
import AboutHero from './AboutHero';
import AboutText from './AboutText';

const About = () => {
  return (
    <section className="ABOUT">
      <AboutHero />
      <AboutText />
      <AboutCards />
      <AboutDivider />
      <AboutChef />
    </section>
  );
};
export default About;
