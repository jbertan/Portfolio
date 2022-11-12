"use client";
import { useRef } from "react";
import { Resume } from "../components/util/resume";

interface adminVar {
  func: (aboutMe: string) => void;
  setClass: (resume: Resume) => void;
  cv: Resume;
}

const AdminVariable = (props: adminVar) => {
  const aboutMeInput = useRef<HTMLTextAreaElement>(null);

  const submitHandler = () => {
    if (aboutMeInput.current?.type === undefined) {
      throw new Error("Error ");
    }

    props.func(aboutMeInput.current?.value);
  };
  const submitHandlerTest = () => {
    props.setClass(props.cv);
  };

  return (
    <div className="flex flex-col items-center w-full bg-primary h-fit">
      <h2 className="w-[113px] md:w-[114px] lg:w-[187px]  h-[22px] md:h-[28px] lg:h-[53px] mt-[28px] md:mt-[42px] font-serif font-normal text-[24px] lg:text-[40px]">
        About Me
      </h2>
      <textarea
        id="message"
        rows={10}
        className="mt-[30px] w-[250px] md:w-[700px] lg:w-[950px] h-[200px] md:h-[250px] lg:h-[287px] block p-2.5  text-sm md:text-lg lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
      ></textarea>
      {/* Blue Div */}
      <div className="w-[250px] md:w-[700px] lg:w-[950px] h-[250px] md:h-[350px] lg:h-[480px] flex flex-col mt-[30px] bg-pteal">
        {/* Button div*/}
        <div className="w-full h-[25px] flex justify-start">
          <button className="w-[25px] h-[25px] md:w-[45px] lg:w-[65px] md:h-[45px] lg:h-[65px] border-2 bg-primary shadow-lg shadow-pyellow">
            +
          </button>
          <button className="w-[25px] h-[25px] md:w-[45px] lg:w-[65px] md:h-[45px] lg:h-[65px] border-2 bg-primary shadow-lg shadow-pyellow">
            -
          </button>
        </div>
        {/* Caption and Position */}
        <div className="flex flex-wrap justify-center mt-[11px] items-center">
          <span className="w-[49px] md:w-[117px] lg:w-[160px] h-[16px] md:h-[33px] lg:h-[49px] text-[12px] md:text-[24px] lg:text-[40px] font-normal font-serif">
            Caption
          </span>
          <input
            type="text"
            className="w-[169px] h-[32px] md:w-[272px] md:h-[45px] lg:w-[369px] lg:h-[67px] block p-2.5  text-sm md:text-base lg:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Caption..."
            required
          />
        </div>
        <div className="flex flex-wrap justify-center mt-[11px] md:mt-[20px] lg:mt-[28px] items-center">
          <span className="w-[49px] md:w-[117px] lg:w-[160px] h-[16px] md:h-[33px] lg:h-[49px] text-[12px] md:text-[24px] lg:text-[40px] font-normal font-serif">
            Position
          </span>
          <input
            type="text"
            className="w-[169px] h-[32px] md:w-[272px] md:h-[45px] lg:w-[369px] lg:h-[67px] block p-2.5  text-sm md:text-base lg:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Position..."
            required
          />
        </div>
        {/* Text Area */}
        <div className="w-full flex justify-center">
          <textarea
            id="description"
            rows={10}
            className="mt-[11px] md:mt-[20px] lg:mt-[26px] w-[226px] h-[117px] md:w-[680px] md:h-[146px] lg:w-[924px] lg:h-[217px] block p-2.5  text-sm md:text-lg lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default AdminVariable;
