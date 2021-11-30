import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const area_query = req.query.area.replace(/[{|}|']+/g, '');
  const stage_query = req.query.stage.replace(/[{|}|']+/g, '');
  const type_query = req.query.type.replace(/[{|}|']+/g, '');
  const inputText_query = req.query.inputText;
  // const query_s = {area_query, stage_query, type_query, inputText_query};

  var dict = {};

  if (area_query !=  '') dict["location.region"] = area_query;
  if (stage_query != '') dict["menu.level"] = stage_query;
  if (type_query != '') dict["category"] = type_query;

  console.log(dict);

  const client = await clientPromise;
  const db = client.db("sample");

  const data = await db
    .collection("sam")
    .find(dict)
    //.find( { "menu": {"$elemMatch": {"menu": "비건"}}})
    // .find({"menu": {"level": "비건"}})
    .toArray();

  res.json(data);

  return <div>data</div>;
}