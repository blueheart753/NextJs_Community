import { MongoClient } from 'mongodb';
const url = 'mongodb+srv://...';
const options = { useNewUrlParser: true };
let client = null;

async function connectDB() {
  if (client && client.isConnected()) {
    // 이미 연결되어 있다면 클라이언트 객체를 그대로 반환합니다.
    return client;
  }
  try {
    client = await MongoClient.connect(url, options);
    console.log('MongoDB 연결 성공');
    return client;
  } catch (error) {
    console.error('MongoDB 연결 실패', error);
    throw error;
  }
}

export { connectDB };
