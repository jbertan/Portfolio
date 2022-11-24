"use client";

import AdminLogin from "../../components/AdminLogin";
import SignUp from "../../components/SignUp";
import { useState } from "react";

const LoginSignUp = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center bg-pblack h-screen">
      <div className="text-2xl bg-pblack w-full flex justify-center items-center">
        {status === false ? <AdminLogin /> : <SignUp />}
      </div>
      <button onClick={() => setStatus(!status)}>
        {status === false ? (
          <h2 className="text-pteal underline relative top-10 left-36 font-thin text-sm">
            SignUp
          </h2>
        ) : (
          <h2 className="text-pteal underline relative top-10 left-36 font-thin text-sm">
            LogIn
          </h2>
        )}
      </button>
    </div>
  );
};
export default LoginSignUp;
