import { useRef } from "react";
import { useState } from "react";
import { PasswordChecker } from "./util/InputChecker";
import { hashPassword } from "./util/Hash";

const SignUp = () => {
  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const [pass, setPass] = useState(true);
  const sendData = async (userName: string, passwordh: string) => {
    const password = await hashPassword(passwordh);
    const user = { userName, password };
    const response = await fetch("http://localhost:3000/api/registerUser", {
      method: "PUT",
      body: JSON.stringify({ user: user }),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  };

  const submitHandler = () => {
    const userName = inputUsername!.current?.value.toString();
    const password = inputPassword!.current?.value.toString();
    if (userName && password !== undefined) {
      if (PasswordChecker(password)) {
        setPass(true);
        sendData(userName, password);
      } else {
        setPass(false);
        return;
      }
    }
  };
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
      <h2 className="text-pteal tracking-wider text-4xl font-bold font-serif mb-4">
        SignUp
      </h2>
      <div className="flex justify-center items-center space-x-2">
        <label htmlFor="Username" className="text-sm font-serif text-primary">
          Email or UserName
        </label>
        <input
          ref={inputUsername}
          type="text"
          className="h-8 w-48 placeholder-pdarkgreen placeholder:text-sm text-center text-pblack border-2 border-pteal"
          placeholder="Username..."
        />
      </div>
      <div className="flex justify-center items-center space-x-8">
        <label htmlFor="Username" className="text-sm font-serif text-primary">
          Enter Password
        </label>
        <input
          ref={inputPassword}
          type="text"
          className={
            "h-8 w-48 placeholder-pdarkgreen placeholder:text-sm text-center text-pblack border-2" +
            (pass ? " border-pteal" : " border-pred")
          }
          placeholder="Pass.."
        />
      </div>
      <button
        onClick={submitHandler}
        className="flex justify-center items-center h-fit w-fit border-4 border-pteal relative left-28 px-4 hover:bg-pteal transition-all duration-300"
      >
        <h3 className="text-primary text-md font-serif hover:text-pblack transition-all duration-300">
          Send
        </h3>
      </button>
    </div>
  );
};
export default SignUp;
