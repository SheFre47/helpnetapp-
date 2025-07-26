
// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://nkwathenicampbell:w9u9bffWC18mnDad@cluster0.e9ja0g9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const options = {};

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default clientPromise;
