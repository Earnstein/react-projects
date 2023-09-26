import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/User.model.js";
import Post from "../models/Post.model.js";
import { posts, users } from "../data/index.js";

dotenv.config();

mongoose.connection.once("open", () => {
  console.log("Mongodb connection is ready!...");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function connectToMongoDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}

async function seedData() {
  try {
    await User.insertMany(users);
    await Post.insertMany(posts);
    console.log("Data seeded successfully");
  } catch (error) {
    console.error("Data seeding error:", error);
  }
}

async function mongoDisconnect() {
  await mongoose.disconnect;
}
export { connectToMongoDB, mongoDisconnect, seedData };
