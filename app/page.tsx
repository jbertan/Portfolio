import { Fragment } from "react";
import Experience from "../components/Experience";
import ExperienceLeft from "../components/ExperienceLeft";
import AboutMe from "../components/AboutMe";

const Page = async () => {
  const getData = async () => {
    const response = await fetch("http://localhost:3000/api/hellfo", {
      next: { revalidate: 10 },
    });
    return response.json();
  };
  const aboutMePromise = await getData();
  return (
    <Fragment>
      <div className="flex flex-col items-center bg-primary ">
        <AboutMe aboutMeText={aboutMePromise.aboutMe} />
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
        <Experience
          title="Freelance Developer 2022-"
          position="Owner"
          description="I give service as a Full-Stack developer, prepare websites and web applications, and find software solutions for my clients businesses"
        />
      </div>
    </Fragment>
  );
};
export default Page;
