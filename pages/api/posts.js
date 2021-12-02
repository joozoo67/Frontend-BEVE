import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const area_query = req.query.area.replace(/[{|}|']+/g, '');
  const area_query_list = area_query.split(" ");

  const stage_query = req.query.stage.replace(/[{|}|']+/g, '');
  const type_query = req.query.type.replace(/[{|}|']+/g, '');
  const inputText_query = req.query.inputText;

  var dict = {};
  console.log("_----");
  console.log(area_query_list);

  if (area_query !=  '') dict["location.region"] = area_query;
  if (type_query != '') dict["category"] = type_query;
  if (stage_query != '') dict["menu"] = { "$elemMatch": {"level": stage_query}};
  // {"menu": { "$elemMatch": {"level": stage_query}}} 형식으로 되어야 함

  if (area_query == '' && type_query == '' && stage_query == '' && inputText_query == '') dict["location.region"] = "오류";

  const client = await clientPromise;
  const db = client.db("sample");

  const data = await db
    .collection("sam")
    .find(dict)
    // .find( dict, { "menu": { "$elemMatch": {"level": stage_query}} } )
    // .find( { "location.region": "강동구" } )
    // .find({"menu": { "$elemMatch": {"level": "비건"}}})
    .toArray();

//  db.things.find({$where: function() {
//      for (var key in this) {
//          if (this[key] === "bar") {
//              return true;
//          }
//      }
//      return false;
//  }});

  console.log(data);

  res.json(data);

  return <div>data</div>;
}