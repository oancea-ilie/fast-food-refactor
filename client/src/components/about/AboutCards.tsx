import aboutCard1 from '../../assets/images/about-card-1.jpg';
import aboutCard2 from '../../assets/images/about-card-2.jpg';
import aboutCard3 from '../../assets/images/about-card-3.jpg';
const AboutCards = () => {
  return (
    <section className="bg-stone-100">
      <div className="grid grid-cols-3 py-20 max-w-6xl mx-auto gap-5">
        <div className="card rounded-md bg-white shadow-xl">
          <img
            src={aboutCard1}
            className="rounded-md rounded-br-none rounded-bl-none"
            alt="Shoes"
          />
          <div className="card-body px-6 py-8">
            <h2 className="card-title text-black mb-1 font-bold">
              Quality is Our Priority
            </h2>
            <p className="text-black/50 leading-7 text-sm">
              We take pride in using only the freshest ingredients and highest
              quality products to create each and every dish. From hand-cut
              vegetables to premium cuts of meat, we go above and beyond to
              ensure that our customers receive only the best.
            </p>
          </div>
        </div>
        <div className="card rounded-md bg-white shadow-xl">
          <img
            src={aboutCard2}
            className="rounded-md rounded-br-none rounded-bl-none"
            alt="Shoes"
          />
          <div className="card-body px-6 py-8">
            <h2 className="card-title text-black mb-1 font-bold">
              Unmatched Taste
            </h2>
            <p className="text-black/50 leading-7 text-sm">
              Our chefs are passionate about creating unique and delicious meals
              that are sure to satisfy any craving. We believe that food should
              be more than just fuel - it should be an experience. That&apos;s
              why we&apos;re dedicated to making every bite a memorable one.
            </p>
          </div>
        </div>
        <div className="card rounded-md bg-white shadow-xl">
          <img
            src={aboutCard3}
            className="rounded-md rounded-br-none rounded-bl-none"
            alt="Shoes"
          />
          <div className="card-body px-6 py-8">
            <h2 className="card-title text-black mb-1 font-bold">
              Always On Time
            </h2>
            <p className="text-black/50 leading-7 text-sm">
              We understand that our customers have busy schedules, which is why
              we&apos;re committed to delivering every order on time, every
              time. With real-time tracking and updates, you can trust that your
              meal will arrive exactly when you need it, hot and fresh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutCards;
