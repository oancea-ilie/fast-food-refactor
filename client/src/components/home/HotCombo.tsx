const HotCombo = () => {
  return (
    <section className="hot-combos">
      <div className="container">
        <div className="header">
          <div className="title">
            <h1>Our Hot Combo Items</h1>
            <div className="line" />
          </div>
        </div>
        <div className="body">
          <div className="card">
            <div className="text">
              <h1>
                Deal of <span>Day</span>
              </h1>
              <h2>Tasty Combo</h2>
              <div className="price">
                <span>Only</span>
                <sub>$</sub>
                <h2>25</h2>
              </div>
            </div>
          </div>
          <div className="card card-2">
            <div className="text">
              <h1>
                Hamburg <span>Day</span>
              </h1>
              <h2>Tasty Combo</h2>
              <div className="price">
                <span>Only</span>
                <sub>$</sub>
                <h2>25</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCombo;
