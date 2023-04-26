import { connectDB } from '@/util/database';
import { MongoClient } from 'mongodb';

export default async function Home() {
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  return (
    <div>
      <div></div>
    </div>
  );
}
