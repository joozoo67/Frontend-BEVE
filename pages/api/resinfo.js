import clientPromise from "../lib/mongodb";

export default function HomePage({ query }) {
    console.log("data", rests)
}

export async function getServerSideProps( { query }) {
  const target_area = query.area
  const target_stage = query.stage
  const target_type = query.type

  console.log(query.method, query.body);

  if (res.status == 200) {
    const client = await clientPromise;
    const db = client.db("sample");
    const data = await db
      .collection("sam")
      .find({area: target_area}, {stage: target_stage}, {type: target_type})
      .toArray();
  }

  const rests = JSON.parse(JSON.stringify(data));

  return {
    props: { rests },
  } catch (error) {
  console.log(error);
  return { props : { } } ;
  }
}