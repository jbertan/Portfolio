"use client";
import AdminVariable from "../../../components/AdminVariable";
import { Resume } from "../../../components/util/resume";

const AdminId = ({ params }: { params: { adminId: string } }) => {
  const { adminId } = params;
  const cv = new Resume(adminId);
  console.log(cv);
  console.log(adminId);
  const setData = async (name: string) => {
    const resp = await fetch("http://localhost:3000/api/hellfo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ aboutme: name }),
    });
    const data = resp.json();
    return data;
  };
  const setClass = async (cv: Resume) => {
    const resp = await fetch("http://localhost:3000/api/setResume", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resume: cv }),
    });
    const data = resp.json();
    return data;
  };
  let aboutMe = "";
  const variable = async (faboutMe: string) => {
    aboutMe = faboutMe;
    console.log(aboutMe);
    const response = setData(aboutMe);
    const data = await response;
    console.log(data);
  };
  return <AdminVariable func={variable} setClass={setClass} cv={cv} />;
};
export default AdminId;
