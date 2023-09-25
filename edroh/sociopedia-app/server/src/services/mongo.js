import mongoose from "mongoose";
import dotenv from "dotenv";

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

async function mongoDisconnect() {
  await mongoose.disconnect;
}
export { connectToMongoDB, mongoDisconnect };
