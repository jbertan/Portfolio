import AdminVariable from "../../../components/AdminVariable";
import { Resume } from "../../../components/util/resume";

const AdminId = ({ params }: { params: { adminId: string } }) => {
  const { adminId } = params;
  const resume = new Resume(adminId);
  return <AdminVariable resume={resume} />;
};
export default AdminId;
