import { Link } from 'react-router-dom';
import About1 from '../../assets/images/about-img-1.jpg';
import About2 from '../../assets/images/about-img-2.jpg';

const About = () => {
  return (
    <section className="bg-stone-50">
      <div className="--hero flex flex-col items-center justify-center bg-red py-24">
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
      </div>
      <div className="--about-body max-w-6xl mx-auto grid grid-cols-2 my-24">
        <div className="">
          <h1 className="text-black text-4xl font-bold">
            Some Words About Us & Our Fast Food
          </h1>
          <p className="text-black/80 mt-10 leading-7">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
          <p className="text-black/80 mt-4 leading-7">
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. User generated content in real-time will
            have multiple touch points for offshoring. strategies to ensure
            proactive domination. At the end of the day, going forward, a new
            normal that has evolved from generation X is on the runway heading
            towards a streamlined cloud solution.
          </p>
        </div>
        <div className="grid gap-3 justify-items-center">
          <img src={About1} className="rounded-lg w-56 shadow-lg" alt="" />
          <img src={About2} className="rounded-lg w-56 shadow-lg" alt="" />
        </div>
      </div>
    </section>
  );
};
export default About;
