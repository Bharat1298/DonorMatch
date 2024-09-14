import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db("charities");

    // Create a unique index on the "email" field in the "users" collection
    await db.collection("users").createIndex({ email: 1 }, { unique: true });
    console.log("Created unique index on 'email' field in the 'users' collection");

    return db;
  } catch (err) {
    console.error(err);
  }
}

const db = await connectDB();

export default db;
