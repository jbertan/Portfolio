import { Fragment } from "react";
import Experience from "../components/Experience";
import ExperienceLeft from "../components/ExperienceLeft";
import AboutMe from "../components/AboutMe";

const Page = () => {
  return (
    <Fragment>
      <div className="flex flex-col items-center bg-primary ">
        <AboutMe />
        <Experience
          title="Freelance Developer 2022-"
          position="Owner"
          description="I give service as a Full-Stack developer, prepare websites and web applications, and find software solutions for my clients businesses"
        />
        <ExperienceLeft
          title="Freelance Developer 2022-"
          position="Owner"
          description="I give service as a Full-Stack developer, prepare websites and web applications, and find software solutions for my clients businesses"
        />
      </div>
    </Fragment>
  );
};
export default Page;
