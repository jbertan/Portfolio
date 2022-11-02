import { useRef } from "react";
interface adminVar {
  func: (aboutMe: string) => void;
}

const AdminVariable = (props: adminVar) => {
  const aboutMeInput = useRef<HTMLTextAreaElement>(null);

  const submitHandler = () => {
    if (aboutMeInput.current?.type === undefined) {
      throw new Error("Error ");
    }

    props.func(aboutMeInput.current?.value);
  };

  return (
    <div className="flex justify-center items-center space-x-2">
      <label htmlFor="Username" className="text-sm font-serif text-primary">
        Email or UserName
      </label>
      <textarea
        className="h-8 w-48 placeholder-pdarkgreen placeholder:text-sm text-center text-pblack border-2 border-pteal"
        placeholder="Enter Username"
        ref={aboutMeInput}
      />
      <button
        onClick={submitHandler}
        className="h-8 w-48 border-2 border-pdarkgreen"
      >
        Submit
      </button>
    </div>
  );
};
export default AdminVariable;
