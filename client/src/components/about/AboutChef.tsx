import aboutChef1 from '../../assets/images/about-chef-1.jpg';
import aboutChef2 from '../../assets/images/about-chef-2.jpg';
import aboutChef3 from '../../assets/images/about-chef-3.jpg';

import aboutChef4 from '../../assets/images/about-chef-4.jpg';

const AboutChef = () => {
  return (
    <section className="my-20 max-w-6xl mx-auto">
      <div className="--title my-10 flex flex-col items-center">
        <h1 className="font-bold text-4xl text-black mb-4">Meet Our Chefs</h1>
        <div className="w-16 h-1 bg-red-l rounded-full" />
        <p className="text-black/50 leading-7 max-w-2xl text-center pt-6">
          Our team of skilled chefs is dedicated to bringing you the best fast
          food experience possible. With years of experience and a passion for
          great food, they are always exploring new flavors and techniques to
          create delicious, mouth-watering dishes. Get to know our chefs and
          their specialties - we know you&apos;ll be impressed!
        </p>
      </div>
      <div className="grid grid-cols-4 justify-items-center mt-14">
        <div className="--card flex flex-col items-center">
          <div className="avatar">
            <div className="w-52 rounded-full">
              <img src={aboutChef1} />
            </div>
          </div>
          <h2 className="mt-6 text-black font-bold text-xl mb-1">
            Jason Nguyen
          </h2>
          <p className="text-black/50">Burger specialist</p>
        </div>
        <div className="--card flex flex-col items-center">
          <div className="avatar">
            <div className="w-52 rounded-full">
              <img src={aboutChef2} />
            </div>
          </div>
          <h2 className="mt-6 mb-1 text-black font-bold text-xl">Alex Patel</h2>
          <p className="text-black/50">Pizza expert</p>
        </div>
        <div className="--card flex flex-col items-center">
          <div className="avatar">
            <div className="w-52 rounded-full">
              <img src={aboutChef3} />
            </div>
          </div>
          <h2 className="mt-6 mb-1 text-black font-bold text-xl">
            Samantha Lee
          </h2>
          <p className="text-black/50">Sushi master</p>
        </div>
        <div className="--card flex flex-col items-center">
          <div className="avatar">
            <div className="w-52 rounded-full">
              <img src={aboutChef4} />
            </div>
          </div>
          <h2 className="mt-6 mb-1 text-black font-bold text-xl">
            Hernandez Family
          </h2>
          <p className="text-black/50">BBQ pitmaster</p>
        </div>
      </div>
    </section>
  );
};
export default AboutChef;
