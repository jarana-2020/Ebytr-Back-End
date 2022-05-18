import dotenv from 'dotenv';
dotenv.config();

const { env } = process;

export default {
  api: {
    port: Number(env.PORT || 3001)
  },
  db: {
    uri: env.MONGO_URL || 'mongodb://localhost:27017/todo_db'
  }
};