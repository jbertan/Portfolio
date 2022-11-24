import { cv } from "./util/resume";
import { useEffect, useState } from "react";
interface data {
  cv: cv[];
  deleteHandler: (i: number) => void;
}
const AdminVariableExperience = (props: data) => {
  const [cvi, setCV] = useState<cv[]>([]);
  useEffect(() => {
    setCV([...props.cv]);
    console.log("props değişti");
  }, [props]);
  return (
    <div>
      {cvi.map((exper, i) => (
        <div
          key={i}
          className="w-[250px] md:w-[700px] lg:w-[950px] md:h-[400px] lg:h-[500px] flex flex-col items-center overflow-hidden h-fit mt-20 border-2 border-secondary md:border-hidden shadow-2xl md:shadow-none"
        >
          <button type="button" onClick={props.deleteHandler.bind(0, i)}>
            Erase Mey {i}
          </button>
          <div className="top-10 md:bg-secondary md:w-[700px] lg:w-[950px] h-[200px] md:h-[250px] lg:h-[287px]  md:left-[300px] lg:left-[400px]  bg-primary relative"></div>
          <h2 className="text-pblack font-bold tracking-wide text-center md:text-right top-[-160px] md:top-[-70px] lg:top-[-120px] h-[95px] md:left-[10px] lg:left-[-100px]  text-2xl md:text-4xl font-serif relative">
            {exper.caption}
          </h2>
          <h3 className="text-pblack font-medium md:top-0 top-[-150px] tracking-wide  lg:left-[350px] md:left-[250px] h-[33px] md:text-2xl text-xl font-serif relative">
            {exper.position}
          </h3>
          <p className="text-pblack text-center md:text-2xl text-xl font-bold tracking-wide  lg:w-[800px] md:w-[650px]  h-[153px] md:top-[58px] top-[-108px] font-serif mr-8 ml-8 md:text-left relative">
            {exper.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default AdminVariableExperience;
