import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {

  const area_query = req.query.area.replace(/[[|{|}|]|]| |'|"|']+/g, '');
  const area_query_list = area_query.split(",");

  const stage_query = req.query.stage.replace(/[[|{|}|]|]| |'|"|']+/g, '');
  const stage_query_list = stage_query.split(",");

  const type_query = req.query.type.replace(/[[|{|}|]|]| |'|"|']+/g, '');
  const type_query_list = type_query.split(",");

  const inputText_query = req.query.inputText.replace(/[[|{|}|]|]| |'|"|']+/g, '');
  const inputText_query_l = inputText_query.replace(",", ' ');

  const page_query = req.query.page - 1;
  const start = page_query * 13;
  const end = start + 13;

  var dict = {};
  var dict_area = {};
  var dict_type = {};
  var dict_stage = {};
  var dict_input = {};

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

  if (stage_query != '') dict_stage["menu"] = { "$elemMatch": {"level": stage_query_list[stage_query_list.length-1]} };
  // {"menu": { "$elemMatch": {"level": stage_query}}} 형식으로 되어야 함

  if (inputText_query != '') {
      dict_input = { $text : { $search : inputText_query_l } };
  }
  // { $text : { $search : "java coffee" } 형식

  dict["$and"] = [ dict_area, dict_type, dict_stage, dict_input ];

  if (area_query == '' && type_query == '' && stage_query == '' && inputText_query == '') dict["location.region"] = "오류";

  const client = await clientPromise;
  const db = client.db("sample");

  db.collection("sam").createIndex( { "$**" : "text" } );

  const data = await db
    .collection("sam")
    .find(dict)
    .limit(end)
    //.find({ $text : { $search : inputText_query_l } })
    .toArray();

  const datav = data.slice(start, end);

  res.json(datav);

  return <div>datav</div>;
}