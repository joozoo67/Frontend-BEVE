import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const area_query = req.query.area.replace(/[{|}|']+/g, '');
  const area_query_list = area_query.split(" ");

  const stage_query = req.query.stage.replace(/[{|}|']+/g, '');
  const stage_query_list = stage_query.split(" ");

  const type_query = req.query.type.replace(/[{|}|']+/g, '');
  const type_query_list = type_query.split(" ");

  const inputText_query = req.query.inputText;

  var dict = {};
  var dict_area = {};
  var dict_type = {};
  var dict_stage = {};

  if (area_query !=  '') {
    var tmp = []
    for (let a = 0; a < area_query_list.length; a++) tmp.push({"location.region": area_query_list[a]});
    dict_area["$or"] = tmp;
  }

  if (type_query !=  '') {
    var tmp = []
    for (let t = 0; t < type_query_list.length; t++) tmp.push({"category": type_query_list[t]});
    dict_type["$or"] = tmp;
  }
  if (stage_query != '') dict["menu"] = { "$elemMatch": {"level": stage_query}};
  // if (stage_query !=  '') {
  //  var tmp = []
  //  for (let s = 0; s < stage_query_list.length; s++) tmp.push({"menu" : { "$elemMatch": {"level": s} } });
  //  dict_stage["$or"] = tmp;
  // }
  // {"menu": { "$elemMatch": {"level": stage_query}}} 형식으로 되어야 함

    console.log(dict_stage);

    dict["$and"] = [ dict_area, dict_type, dict_stage ];

    console.log(dict);

  if (area_query == '' && type_query == '' && stage_query == '' && inputText_query == '') dict["location.region"] = "오류";

  const client = await clientPromise;
  const db = client.db("sample");

  const data = await db
    .collection("sam")
    // .find({$or: [{"location.region": "강동구"}, {"location.region": "강서구"}]})
    .find(dict)
    .toArray();

  console.log(data);

  res.json(data);

  return <div>data</div>;
}