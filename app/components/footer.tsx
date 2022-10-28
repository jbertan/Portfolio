const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-primary">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-1 justify-center items-center mt-10 mb-2">
        <input
          type="text"
          className="xl:w-[485px] lg:w-[400px] md:w-[350px] h-[59px] border-2 border-pdarkgreen pl-2 bg-primary"
          id="name"
          placeholder="Name"
        />
        <input
          type="email"
          className="xl:w-[485px] lg:w-[400px] md:w-[350px] h-[59px] border-2 border-pdarkgreen pl-2 bg-primary"
          id="name"
          placeholder="Email"
        />
      </div>
      <textarea
        className="w-[325px] md:w-[704px] lg:w-[804px] xl:w-[972px] h-[225px] pl-2 flex justify-start border-2 border-pdarkgreen bg-primary"
        id="message"
        placeholder="Message"
      />
      <button className="border-2 border-pdarkgreen h-[59px] w-[325px] md:w-[218px] mt-2 xl:left-[377px] lg:left-[294px] md:left-[243px] relative  hover:bg-pdarkgreen hover:text-primary hover:shadow-2xl shadow-pblack transition-color hover:duration-500">
        Send Message
      </button>
    </div>
  );
};
export default Footer;
