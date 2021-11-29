import clientPromise from "../lib/mongodb";

export default function HomePage({ rests }) {
    console.log("data", rests)
  return (
    <div>
        <title>DB TEST </title>
        <p> { rests.text } </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("sample");
  const data = await db  
    .collection("sam")
    .find({name : "발우공양"})
    .toArray();

  const rests = JSON.parse(JSON.stringify(data));

  return {
    props: { rests },
  };
}