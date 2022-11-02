import type { NextApiRequest, NextApiResponse } from "next";
import { ConnectDatabase } from "../../components/util/ConnectDb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "PUT") {
    const writeData = async (aboutMe: string) => {
      const client = ConnectDatabase();
      try {
        const db = client.db("profile");
        const collections = db.collection("admin");
        collections.updateOne(
          { id: 1 },
          { $set: { aboutMe: aboutMe } },
          { upsert: true }
        );
      } catch (error) {
        console.log(error);
      }
      res.status(200).json({ name: "PUT Establish" });
      client.close();
    };

    writeData(req.body.aboutme);
  }
  if (req.method === "GET") {
    const client = ConnectDatabase();
    try {
      const db = client.db("profile");
      const collections = db.collection("admin");
      const result = await collections.findOne({ id: 1 });
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
    client.close();
  }
}
