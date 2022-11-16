import AboutMe from "../../components/AboutMe";
import Experience from "../../components/Experience";
import ExperienceLeft from "../../components/ExperienceLeft";
import { notFound } from "next/navigation";

interface paramData {
  params: { userName: string };
}
interface Resume {
  userName: string;
  aboutMe: string;
  experience: [{ caption: string; position: string; description: string }];
}

const UserName = async ({ params: { userName } }: paramData) => {
  const getData = async () => {
    const response = await fetch(`http://localhost:3000/api/${userName}`, {
      next: { revalidate: 10 },
    });
    return response.json();
  };
  const resume: Resume = await getData();
  if (!resume) {
    notFound();
  }
  console.log(resume);
  return (
    <div className="flex flex-col items-center bg-primary ">
      <AboutMe aboutMeText={resume.aboutMe} />
      {resume.experience.map((exper, i) =>
        i === 0 || 2 || 4 || 6 ? (
          <Experience
            key={i}
            title={exper.caption}
            position={exper.position}
            description={exper.description}
          />
        ) : (
          <ExperienceLeft
            key={i}
            title={exper.caption}
            position={exper.position}
            description={exper.description}
          />
        )
      )}

      {/*  <ExperienceLeft
        title={exper.caption}
        position={exper.position}
        description={exper.description}/>)
      */}
    </div>
  );
};

export default UserName;
