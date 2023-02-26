import Btn from '../shared/Btn';

const MenuOffers = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-4">
      <div className='bg-[url("./assets/images/menu-1.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Vegan Cheeseburger
            </h1>
            <p className="text-white leading-7 mb-4 mr-20">
              Our Vegan Cheeseburger is The perfect choice for meat lovers! This
              juicy burger is made with high-quality, tender meat and topped
              with melted cheese for a burst of flavor in every bite.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$5.99</h1>
            <Btn variant="red" className="py-4 px-8">
              ORDER NOW
            </Btn>
          </div>
        </div>
      </div>
      <div className='bg-[url("./assets/images/menu-2.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Guardian Spicy Burger
            </h1>
            <p className="text-white leading-7  mb-4 mr-20">
              The Guardian Spicy Burger is a delicious burger option with a kick
              of spice. Made with high-quality ingredients, this burger is sure
              to satisfy your taste buds. Try it today and experience the
              perfect blend of heat and flavor.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$7.99</h1>
            <Btn variant="red" className="py-4 px-8">
              ORDER NOW
            </Btn>
          </div>
        </div>
      </div>
      <div className='bg-[url("./assets/images/menu-3.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Deliveroo Pizza
            </h1>
            <p className="text-white leading-7 mb-4 mr-20">
              Deliveroo Pizza is a classic pizza topped with delicious, melted
              cheese, tomato sauce, and a variety of other fresh toppings. Enjoy
              the perfect combination of chewy crust and flavorful cheese in
              every bite.
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$8.99</h1>
            <Btn variant="red" className="py-4 px-8">
              ORDER NOW
            </Btn>
          </div>
        </div>
      </div>
      <div className='bg-[url("./assets/images/menu-4.jpg")] rounded-md shadow-md bg-bottom relative p-8'>
        <div className="bg-blue/60 rounded-md ">
          <div className="p-8">
            <h1 className="text-white text-5xl mb-4 font-bold">
              Sandwich Spicy
            </h1>
            <p className="text-white leading-7 mr-20 mb-4">
              Indulge in the fiery flavors of our Spicy Sandwich, featuring a
              perfect blend of juicy meat, fresh veggies, and a touch of heat.
              Satisfy your cravings and add a little spice to your day!
            </p>
            <h1 className="text-white font-extrabold text-5xl mb-4">$4.99</h1>
            <Btn variant="red" className="py-4 px-8">
              ORDER NOW
            </Btn>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuOffers;
