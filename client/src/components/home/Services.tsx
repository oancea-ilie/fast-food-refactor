import service1 from '../../assets/images/service-icon-1.png';
import service2 from '../../assets/images/service-icon-2.png';
import service3 from '../../assets/images/service-icon-3.png';
import service4 from '../../assets/images/service-icon-4.png';

const Services = () => {
  return (
    <section className="service">
      <div className="container">
        <div className="card">
          <img src={service1} alt="" />
          <h1>Free shipping on first order</h1>
          <p>Sign up for updates and get free shipping</p>
        </div>
        <div className="card">
          <img src={service2} alt="" />
          <h1>Best Taste Guarantee</h1>
          <p>We use best ingredients to cook the taste food.</p>
        </div>
        <div className="card">
          <img src={service3} alt="" />
          <h1>Variety of Dishes</h1>
          <p>We give variety of dishes, deserts, and drinks</p>
        </div>
        <div className="card">
          <img src={service4} alt="" />
          <h1>25 Minutes Delivery</h1>
          <p>We deliver your food at your door that you order</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
