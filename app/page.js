import { connectDB } from "@/util/database";
import { MongoClient } from "mongodb";

export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="container">
      <div>
        <div className="Box">
          <a href="http://localhost:3000/list" className="moveList">
            리스트로 이동
          </a>
          <button className="darkMode">다크모드</button>
        </div>
      </div>
    </div>
  );
}
