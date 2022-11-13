"use client";
import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Resume } from "../components/util/resume";

interface adminVar {
  resume: Resume;
}

const AdminVariable = (props: adminVar) => {
  const resume = props.resume;
  /* const aboutMeInput = useRef<HTMLTextAreaElement>(null); */
  /* const descriptionInput = useRef<HTMLTextAreaElement>(null); */
  const [aboutMe, setAboutMe] = useState<string>("");
  const [caption, setCaption] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    resume.setAboutMe(aboutMe);
    resume.addExperience(caption, position, description);
    console.log(resume);
    console.log(resume.experience);
    const capt = document.getElementById("caption");
    setCaption("");
    setDescription("");
    setPosition("");
    const response = await fetch("http://localhost:3000/api/setResume", {
      method: "PUT",
      body: JSON.stringify({ resume: resume }),
      headers: { "Content-Type": "application/json" },
    });
  };

  const aboutMeChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setAboutMe(event.target.value);
  };
  const captionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setCaption(() => event.target.value);
  };
  const positionChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setPosition(() => event.target.value);
  };
  const descriptionChangeHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    console.log(event.target.value);
    setDescription(() => event.target.value);
  };
  return (
    <form className="flex flex-col items-center w-full bg-primary h-fit">
      <h2 className="w-[113px] md:w-[114px] lg:w-[187px]  h-[22px] md:h-[28px] lg:h-[53px] mt-[28px] md:mt-[42px] font-serif font-normal text-[24px] lg:text-[40px]">
        About Me
      </h2>
      <textarea
        onChange={aboutMeChangeHandler}
        value={aboutMe}
        rows={10}
        className="mt-[30px] w-[250px] md:w-[700px] lg:w-[950px] h-[200px] md:h-[250px] lg:h-[287px] block p-2.5  text-sm md:text-lg lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Your message..."
      ></textarea>
      {/* Show Pannel of index */}
      {resume.experience.map((exper, i) => (
        <div
          key={i}
          className="w-[250px] md:w-[700px] lg:w-[950px] md:h-[400px] lg:h-[500px] flex flex-col items-center overflow-hidden h-fit mt-20 border-2 border-secondary md:border-hidden shadow-2xl md:shadow-none"
        >
          <div className="top-10 md:bg-secondary md:w-[700px] lg:w-[950px] h-[200px] md:h-[250px] lg:h-[287px]  md:left-[300px] lg:left-[400px]  bg-primary relative"></div>
          <h2 className="text-pblack font-bold tracking-wide text-center md:text-right top-[-160px] md:top-[-70px] lg:top-[-120px] h-[95px] md:left-[10px] lg:left-[-100px]  text-2xl md:text-4xl font-serif relative">
            {exper.caption}
          </h2>
          <h3 className="text-pblack font-medium md:top-0 top-[-150px] tracking-wide  lg:left-[350px] md:left-[250px] h-[33px] md:text-2xl text-xl font-serif relative">
            Owner{exper.position}
          </h3>
          <p className="text-pblack text-center md:text-2xl text-xl font-bold tracking-wide  lg:w-[800px] md:w-[650px]  h-[153px] md:top-[58px] top-[-108px] font-serif mr-8 ml-8 md:text-left relative">
            {exper.description}
          </p>
        </div>
      ))}
      {/* Blue Div */}
      <div className="w-[250px] md:w-[700px] lg:w-[950px] h-[250px] md:h-[350px] lg:h-[480px] flex flex-col mt-[30px] bg-pteal">
        {/* Button div*/}
        <div className="w-full h-[25px] flex justify-start">
          <button
            onClick={submitHandler}
            className="w-[25px] h-[25px] md:w-[45px] lg:w-[65px] md:h-[45px] lg:h-[65px] border-2 bg-primary shadow-lg shadow-pyellow"
          >
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
            value={caption}
            onChange={captionChangeHandler}
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
            value={position}
            onChange={positionChangeHandler}
            type="text"
            className="w-[169px] h-[32px] md:w-[272px] md:h-[45px] lg:w-[369px] lg:h-[67px] block p-2.5  text-sm md:text-base lg:text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Position..."
            required
          />
        </div>
        {/* Text Area */}
        <div className="w-full flex justify-center">
          <textarea
            value={description}
            onChange={descriptionChangeHandler}
            id="description"
            rows={10}
            className="mt-[11px] md:mt-[20px] lg:mt-[26px] w-[226px] h-[117px] md:w-[680px] md:h-[146px] lg:w-[924px] lg:h-[217px] block p-2.5  text-sm md:text-lg lg:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>
      </div>
    </form>
  );
};
export default AdminVariable;
