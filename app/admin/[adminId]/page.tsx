import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import Forbidden from "../../../components/Forbidden";
import AdminMiddleVariable from "../../../components/AdminMiddleVariable";
interface data {
  adminId: string;
}
const AdminId = async ({ params }: { params: { adminId: string } }) => {
  const { adminId } = params;
  const session = await unstable_getServerSession(authOptions);
  const getData = async () => {
    // no-cache will be imported soon
    const result = await fetch(`http://localhost:3000/api/${adminId}`, {
      next: { revalidate: 10 },
    });

    const data = await result.json();
    console.log(data.aboutMe);
    console.log(data.experience);
    return data;
  };
  if (!session || session.user?.email !== adminId) {
    return <Forbidden />;
  }

  return <AdminMiddleVariable cv={await getData()} />;
};
export default AdminId;
