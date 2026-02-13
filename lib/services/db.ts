// lib/mongodb.js
import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGOOB_URL;

export default dbConnect;

async function dbConnect() {
  if (!MONGODB_URL) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }
  await mongoose.connect(MONGODB_URL);
  console.log("db connnected")
  return mongoose;
}
