import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const query = req.query.stage;
  console.log(query)

  const client = await clientPromise;
  const db = client.db("sample");

  const data = await db
    .collection("sam")
    .findOne({ _id: new ObjectId(query) });

  res.json(data);
  return <div>data</div>;
}