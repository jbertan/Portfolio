import AdminLogin from "../../components/AdminLogin";
import { MongoClient } from "mongodb";
import { ConnectDatabase } from "../../components/util/ConnectDb";

const Admin = () => {
  return (
    <div className="text-2xl bg-pblack w-full h-screen flex justify-center items-center">
      <AdminLogin />
    </div>
  );
};
export default Admin;
