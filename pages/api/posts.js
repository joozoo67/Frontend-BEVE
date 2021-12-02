import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const area_query = req.query.area.replace(/[{|}|']+/g, '');
  const stage_query = req.query.stage.replace(/[{|}|']+/g, '');
  const type_query = req.query.type.replace(/[{|}|']+/g, '');
  const inputText_query = req.query.inputText;

  var dict = {};
  console.log("-------");

  if (area_query !=  '') dict["location.region"] = area_query;
  if (type_query != '') dict["category"] = type_query;
  if (stage_query != '') {
  // {"menu": { "$elemMatch": {"level": stage_query}}} 형식으로 되어야 함
  }
  console.log(dict);

  if (area_query == '' && type_query == '' && stage_query == '' && inputText_query == '') dict["location.region"] = "오류";
  console.log(dict);

  const client = await clientPromise;
  const db = client.db("sample");

  const data = await db
    .collection("sam")
    .find(dict, {"menu": { "$elemMatch": {"level": "비건"}}})
    // .find( { "location.region": "강동구" } )
    // .find({"menu": { "$elemMatch": {"level": "비건"}}})
    .toArray();

  console.log(data);

  res.json(data);

  return <div>data</div>;
}