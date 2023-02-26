const AboutDivider = () => {
  return (
    <section className="py-24 bg-[url('./assets/images/about-separator.jpg')] bg-fixed bg-center bg-cover">
      <div className="max-w-6xl mx-auto bg-black/50 px-8 py-14 rounded-md">
        <h1 className="text-white text-6xl font-bold">Big Taste</h1>
        <div className="flex items-center mt-2">
          <div className="line h-[1px] w-20 mr-5 bg-white" />
          <h1 className="text-white text-6xl font-bold">Great Taste</h1>
        </div>
        <p className="text-white mb-4 leading-7 text-sm pl-52 mt-5  ">
          Discover the ultimate dining experience at our restaurant. <br /> Our
          talented chefs use only the freshest ingredients to create <br />{' '}
          delicious dishes that will tantalize your taste buds.
        </p>
      </div>
    </section>
  );
};
export default AboutDivider;
