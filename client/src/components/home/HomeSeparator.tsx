const HomeSeparator = () => {
  return (
    <section className="separator">
      <div className="container">
        <div className="card">
          <div className="text">
            <h2>Exclusive Offer</h2>
            <div className="line" />
          </div>
          <h1>Veggie Fun Pizza</h1>
          <div className="grid">
            <h1 className="price">
              <span className="dolar">$</span>12{' '}
              <span className="each">EACH</span>
            </h1>
            <ul>
              <li>- Chicken Halon</li>
              <li>- Summer Pizza</li>
              <li>- Veggie Lover</li>
            </ul>
          </div>
          <a href="#">ORDER NOW</a>
        </div>
      </div>
    </section>
  );
};

export default HomeSeparator;
