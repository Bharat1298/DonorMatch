import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";
import posts from "./routes/posts.mjs";
import connectDB from "./db/conn.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/posts", posts);

app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));