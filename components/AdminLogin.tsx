const AdminLogin = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-center space-y-2">
      <div className="flex justify-center items-center space-x-2">
        <label htmlFor="Username" className="text-sm font-serif text-primary">
          Email or UserName
        </label>
        <input
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
          type="text"
          className="h-8 w-48 placeholder-pdarkgreen placeholder:text-sm text-center text-pblack border-2 border-pteal"
          placeholder="Pass.."
        />
      </div>
    </div>
  );
};
export default AdminLogin;
