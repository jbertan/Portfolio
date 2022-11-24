import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDatabase } from "../../components/util/ConnectDb";

interface Data {
  message: string;
}
interface user {
  userName: string;
  password: string;
}

const RegisterUser = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  if (req.method === "PUT") {
    const { userName, password } = req.body.user;
    console.log(req.body.user.userName);
    console.log(req.body.user.password);
    const options = { upsert: true };
    const client = ConnectDatabase();

    try {
      const db = client.db("profile");
      const users = db.collection("users");
      const result = await users.updateOne(
        { userName: userName },
        { $set: { password: password } },
        options
      );
      res.status(200).json(result);
      client.close();
    } catch (error) {
      console.log(error);
      client.close();
    }
  }
};
export default RegisterUser;
