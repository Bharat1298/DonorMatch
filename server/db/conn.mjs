import mongoose from "mongoose";

const connectionString = process.env.ATLAS_URI || "";

const connectDB = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;