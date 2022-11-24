import { NextApiRequest, NextApiResponse } from "next";
import { ConnectDatabase } from "../../components/util/ConnectDb";

interface Data {
  message: string;
}
/* input:userName output:experience */
const GetResume = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { getResume } = req.query;
  const client = await ConnectDatabase();
  try {
    const db = client.db("profile");
    const experiences = db.collection("resumes");
    const result = await experiences.findOne({ userName: getResume });
    res.status(200).json(result);
    client.close();
  } catch (error) {
    res.status(401).json({ message: "oops something happend" });
    client.close();
  }
};
export default GetResume;
