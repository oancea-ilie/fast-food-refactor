import delivery1 from '../../assets/images/delivery-img-1.png';
import delivery2 from '../../assets/images/delivery-img-2.png';

const Delivery = () => {
  return (
    <section className="delivery">
      <div className="container">
        <img src={delivery1} alt="" />
        <img className="img-res" src={delivery2} alt="" />
        <div className="card">
          <h2>We Guarantee</h2>
          <h1>30 Minute Delivery</h1>
          <p className="corectie">
            If you’re having a meeting, working late at night and need an extra
            push.
          </p>
          <p>Let us know and we will be there</p>

          <a href="#">ORDER NOW</a>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
