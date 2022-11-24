"use client";
import AdminVariable from "../components/AdminVariable";
import { Resume } from "../components/util/resume";

interface resume {
  cv: { userName: string; aboutMe: string; experience: [] };
}

const AdminMiddleVariable = (props: resume) => {
  const { userName, aboutMe, experience } = props.cv;
  const resume = new Resume(userName);
  resume.setAboutMe(aboutMe);
  resume.setExperience(experience);
  return (
    <div>
      <AdminVariable resume={resume} />
    </div>
  );
};
export default AdminMiddleVariable;
