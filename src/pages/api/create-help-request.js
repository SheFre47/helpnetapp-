// src/pages/api/create-help-request.js
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://nkwathenicampbell:w9u9bffWC18mnDad@cluster0.e9ja0g9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let cachedClient = null;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    if (!cachedClient) {
      const client = new MongoClient(uri);
      await client.connect();
      cachedClient = client;
    }

    const db = cachedClient.db("helpnet"); // you can rename this if you like
    const collection = db.collection("requests");

    const { name, contact, location, description } = req.body;

    if (!name || !contact || !location || !description) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const newRequest = {
      name,
      contact,
      location,
      description,
      createdAt: new Date(),
    };

    await collection.insertOne(newRequest);

    return res
      .status(200)
      .json({ message: "Help request stored successfully" });
  } catch (error) {
    console.error("MongoDB error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
                                   }
