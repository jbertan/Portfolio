interface data {
  aboutMeText: string;
}
const AboutMe: React.FC<data> = (props) => {
  return (
    <div className="flex flex-col items-center xl:w-[1440px] lg:w-[1024px] md:w-[768px] ml-5 mr-5 mt-20 h-fit overflow-hidden">
      <h1 className="font-serif text-3xl text-pblack  h-[52px] relative top-[0px]">
        About Me
      </h1>
      <p className="font-serif text-2xl tracking-wide relative xl:w-[976px] lg:w-[700px] md:w-[650px] xl:h-[389px] lg:h-[450px] md:h-[500px] top-[58px]">
        {props.aboutMeText}
      </p>
    </div>
  );
};
export default AboutMe;
