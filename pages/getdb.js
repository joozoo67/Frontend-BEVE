// libraries
import Head from "next/head";

// lib
import clientPromise from "../lib/mongodb";

export default function HomePage({ movies }) {
    console.log("data", movies)
  return (
    <div>
        <title>DB TESIVAL</title>
        <p> { movies.text } </p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("sample");

//   const data = await db
//     .collection("sam")
//     .find( { name: {$gte: "발우공양" } } )
//     .limit(20)
//     .toArray();

//   const data = await db
//     .collection("sam")
//     .pretty()

  const data = await db  
    .collection("sam")
    .find({name : "발우공양"})
    .toArray();

  const movies = JSON.parse(JSON.stringify(data));

  return {
    props: { movies },
  };
}