import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDatabase } from "../../components/util/ConnectDb";

interface Data {
  message: string;
}
const SetResume = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { userName } = req.body.resume;
  const client = await ConnectDatabase();
  try {
    const db = client.db("profile");
    const resumes = db.collection("resumes");
    const result = await resumes.updateOne(
      { userName: userName },
      { $set: { resume: req.body.resume } },
      { upsert: true }
    );
    res.status(200).json(result);
    client.close();
  } catch (error) {
    client.close();
    throw new Error("Error in set Class");
  }
};
export default SetResume;
