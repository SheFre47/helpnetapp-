import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (!clientPromise) {
  client = new MongoClient(uri, {});
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("helpnet");
      const collection = db.collection("helpRequests");

      const requests = await collection.find({}).toArray();

      res.status(200).json({ success: true, data: requests });
    } catch (error) {
      console.error("Error fetching requests:", error);
      res.status(500).json({ success: false, message: "Server error" });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
    }
