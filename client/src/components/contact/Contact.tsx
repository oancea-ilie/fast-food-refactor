import { Link } from 'react-router-dom';
import Btn from '../shared/Btn';

const Contact = () => {
  return (
    <section className="bg-stone-50">
      <div className="--hero flex flex-col items-center justify-center bg-[url('./assets/images/contact-bg.jpg')] bg-center py-24 relative">
        <h1 className="text-white text-6xl">Contact</h1>
        <div className="flex gap-2 mt-4">
          <Link className="text-sm hover:text-orange" to="/">
            Home
          </Link>
          <div className="text-sm">/</div>
          <Link className="text-sm text-orange" to="/menu">
            Contact
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-[2fr,1fr] max-w-6xl mx-auto py-14 gap-12">
        <div className="--form grid justify-items-start bg-white rounded-md px-10 py-14 shadow-lg -mt-24 z-10">
          <h1 className="text-black font-bold text-3xl">
            We Love To Hear From You
          </h1>
          <p className="mt-6 text-black/50">
            If it s not too much trouble informed us regarding whether you have
            an inquiry, need to leave a remark, or might want additional data
            about Adonis
          </p>
          <div className="flex flex-col items-start mt-8 gap-6 w-full">
            <div className="flex w-full gap-5">
              <input
                type="text"
                className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm"
                placeholder="Name"
              />
              <input
                type="text"
                className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm"
                placeholder="Email"
              />
            </div>
            <input
              type="text"
              className="text-red w-full py-3 font-light px-4 placeholder:text-black/60 text-sm"
              placeholder="Subject"
            />
            <textarea
              className="text-red w-full h-40 px-4 py-3 font-light placeholder:text-black/60 text-sm"
              placeholder="Message"
            />
            <Btn variant="red" className="px-12 py-3">
              SUBMIT
            </Btn>
          </div>
        </div>
        <div className="">
          <h1 className="text-black text-3xl font-bold">Our Office Address</h1>
          <div className="line h-0.5 mt-2 w-12 bg-black text-black mb-6" />
          <h2 className="text-black text-xl font-semibold mb-4">
            Main Restaurant:
          </h2>
          <p className="text-black/50">
            587, Dartmouthi Street, Boston, Massachusetts 0658, PO Box 16122
            United States
          </p>
          <h2 className="text-black text-xl font-semibold my-4">
            Branch, Raurance Road:
          </h2>
          <p className="text-black/50">
            357, West Victoria, Darbaians, Collinsicious 0658, PO Box 16578
            London
          </p>
          <h2 className="text-black text-xl font-semibold my-4">
            Have any querry:
          </h2>
          <p className="text-black/50">Call us on : (1800) 456 7890</p>
        </div>
      </div>
    </section>
  );
};
export default Contact;
