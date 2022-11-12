import { useRef } from "react";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userNameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = async () => {
    console.log(userNameInputRef!.current?.value);
    console.log(passwordInputRef!.current?.value);
    const result = await signIn("credentials", {
      redirect: false,
      userName: userNameInputRef!.current?.value,
      password: passwordInputRef!.current?.value,
    });
    if (result?.ok) {
      if (status === "authenticated") {
        console.log("we re in");
        console.log(session.user?.email);
        router.push(`/profile/${session.user?.email}`);
      }
    }
  };

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center space-y-2">
      <h2 className="text-pteal font-bold tracking-wider text-4xl mb-4">
        Login
      </h2>
      <div className="flex justify-center items-center space-x-2">
        <label htmlFor="Username" className="text-sm font-serif text-primary">
          Email or UserName
        </label>
        <input
          type="text"
          className="h-8 w-48 placeholder-pdarkgreen placeholder:text-sm text-center text-pblack border-2 border-pteal"
          placeholder="Username..."
          ref={userNameInputRef}
        />
      </div>
      <div className="flex justify-center items-center space-x-8">
        <label htmlFor="Username" className="text-sm font-serif text-primary">
          Enter Password
        </label>
        <input
          type="text"
          className="h-8 w-48 placeholder-pdarkgreen placeholder:text-sm text-center text-pblack border-2 border-pteal"
          placeholder="Pass.."
          ref={passwordInputRef}
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
export default AdminLogin;
