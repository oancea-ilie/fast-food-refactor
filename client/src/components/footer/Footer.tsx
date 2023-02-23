import Deliveroo from "../../assets/images/deliveroo.png";

const Footer = () => {
  return (
    <div className="bg-blue">
      <div className="grid grid-cols-3 max-w-6xl mx-auto py-14 gap-14">
        <div className="grid items-center justify-items-center">
          <img className="w-[200px]" src={Deliveroo} alt="" />
          <p className="text-info text-center mx-14 text-md">Just Burgers 256, backer Street, Suit Building New York, 5245</p>
        </div>
        <div className="grid">
          <h1 className="text-white text-xl font-bold">Contact Info</h1>
          <div className="w-[40px] bg-red h-[1px] mt-2 mb-8" />
          <h1 className="text-white text-3xl mb-4">(1800) 574 9687</h1>
          <p className="text-info mb-1">deliveroo@contact.com</p>
          <p className="text-info">contact@deliveroo.com</p>
        </div>
        <div className="grid">
          <h1 className="text-white text-xl font-bold">Opening Hour</h1>
          <div className="w-[40px] bg-red h-[1px] mt-2 mb-8" />
          <div className="flex gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-info">Tuesday- Saturday</p>
              <p className="text-info">Sunday</p>
              <p className="text-info">Monday</p>
            </div>
            <div className="flex flex-col gap-3 items-end">
              <p className="text-info">8 AM - 5 PM</p>
              <p className="text-info">12 AM - 8 PM</p>
              <p className="text-info">Off</p>
            </div>
          </div>
        </div>
      </div>
      <div className="credentials py-8 border-t border-t-divider ">
        <p className="text-info text-center">© Copyright 2022 | <a href="https://google.ro" className="text-red hover:text-orange">Oancea Ilie</a>. All right reserved.</p>
      </div>
    </div>
);
};
export default Footer;
