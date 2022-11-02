"use client";
import AdminVariable from "../../../components/AdminVariable";

const AdminId = () => {
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
  let aboutMe = "";
  const variable = async (faboutMe: string) => {
    aboutMe = faboutMe;
    console.log(aboutMe);
    const response = setData(aboutMe);
    const data = await response;
    console.log(data);
  };
  return <AdminVariable func={variable} />;
};
export default AdminId;
