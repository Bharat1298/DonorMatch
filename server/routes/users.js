import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("users");
    const results = await collection.find({}).toArray();
    res.status(200).json(results);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Error fetching users");
  }
});

// Get a single user by email
router.get("/email", async (req, res) => {
  const email = req.query.email; // Assuming the email is passed as a query parameter
  if (!email) {
    return res.status(400).send("Email query parameter is required");
  }

  try {
    const collection = await db.collection("users");
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user by email:", err);
    res.status(500).send("Error fetching user by email");
  }
});

// Create or update user by email
router.post("/", async (req, res) => {
  const { name, email, skills, interests } = req.body;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  try {
    const collection = await db.collection("users");

    // Check if a user with the same email already exists
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      // Update the existing user
      const updates = {
        $set: {
          name,
          skills,
          interests,
        },
      };
      const result = await collection.updateOne({ email }, updates);
      res.status(200).json({ message: "User updated", result });
    } else {
      // Insert a new user
      const newUser = { name, email, skills, interests };
      const result = await collection.insertOne(newUser);
      res.status(201).json({ message: "User created", result });
    }
  } catch (err) {
    if (err.code === 11000) { // Duplicate email error
      return res.status(409).send("Duplicate email detected");
    }
    console.error("Error creating or updating user:", err);
    res.status(500).send("Error creating or updating user");
  }
});

// Delete a user by email
router.delete("/", async (req, res) => {
  const email = req.body.email;

  if (!email) {
    return res.status(400).send("Email is required");
  }

  try {
    const collection = await db.collection("users");
    const result = await collection.deleteOne({ email });

    if (result.deletedCount === 0) {
      return res.status(404).send("User not found");
    }

    res.status(200).send("User deleted");
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).send("Error deleting user");
  }
});

export default router;
