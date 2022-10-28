interface text {
  title: string;
  position: string;
  description: string;
}
const Experience: React.FC<text> = (props) => {
  return (
    <div className="w-full  flex flex-col items-center overflow-hidden h-fit mt-20 border-2 border-secondary md:border-hidden shadow-2xl md:shadow-none">
      <div className="top-0 md:bg-secondary w-[293px] h-[164px] md:left-[300px] lg:left-[400px] xl:left-[580px] bg-primary relative"></div>
      <h2 className="text-pblack font-bold tracking-wide text-center md:text-right top-[-150px] md:top-[-100px] h-[95px] md:left-[50px] lg:left-[150px] xl:left-[250px] text-2xl md:text-4xl max-w-[466px] font-serif relative">
        {props.title}
      </h2>
      <h3 className="text-pblack font-medium md:top-0 top-[-150px] tracking-wide xl:left-[450px] lg:left-[350px] md:left-[250px] h-[33px] md:text-2xl text-xl max-w-[113px] font-serif relative">
        {props.position}
      </h3>
      <p className="text-pblack text-center md:text-2xl text-xl font-bold tracking-wide xl:w-[976px] lg:w-[800px] md:w-[650px]  h-[153px] md:top-[58px] top-[-108px] font-serif mr-8 ml-8 md:text-left relative">
        {props.description}
      </p>
    </div>
  );
};
export default Experience;
