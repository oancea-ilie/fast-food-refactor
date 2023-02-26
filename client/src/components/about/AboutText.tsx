import About1 from '../../assets/images/about-img-1.jpg';
import About2 from '../../assets/images/about-img-2.jpg';

const AboutText = () => {
  return (
    <section className="--about-body max-w-6xl mx-auto grid grid-cols-2 my-20">
      <div className="">
        <h1 className="text-black text-4xl font-bold">
          About Our Fast Food Delivery Service
        </h1>
        <p className="text-black/80 mt-10 leading-7">
          At our fast food delivery service, we believe that good food should be
          accessible to everyone, no matter how busy their schedule may be.
          That&apos;s why we&apos;re committed to delivering fresh, delicious
          meals straight to our customers&apos; doors, whether they&apos;re at
          home, work, or on-the-go.
        </p>
        <p className="text-black/80 mt-4 leading-7">
          But our commitment to our customers goes beyond just providing great
          food. We strive to create a seamless and enjoyable experience for
          everyone who uses our service. Our user-friendly website app make it
          easy to browse our menu, place an order, and track delivery status in
          real-time.
        </p>
        <p className="text-black/80 mt-4 leading-7">
          We&apos;re proud to be a part of our customers&apos; lives, whether
          we&apos;re providing a quick lunch during a busy workday or a
          delicious dinner for a cozy night in. Thank you for choosing our fast
          food delivery service, and we look forward to serving you soon.
        </p>
      </div>
      <div className="grid gap-3 justify-items-center">
        <img src={About1} className="rounded-lg w-56 shadow-lg" alt="" />
        <img src={About2} className="rounded-lg w-56 shadow-lg" alt="" />
      </div>
    </section>
  );
};
export default AboutText;
