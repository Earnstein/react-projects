import mongoose from "mongoose";
import 'colorts/lib/string'

const MONGO_URL = Bun.env.MONGO_URL!

mongoose.connection.once("open", () => {
  console.log("Mongodb connection is ready!...".green.underline);
});

mongoose.connection.on("error", (err) => {
    console.error(`ERROR: ${err}`.red.inverse);
});

async function mongoConnect() {
 try {
    await mongoose.connect(MONGO_URL);
    console.log("Mongo db is connected...".blue.underline)
 } catch (error) {
    console.error(`MongoDB connection error: ${error}`.red.inverse);
  }
}

async function mongoDisconnect() {
 mongoose.disconnect;
}

export {
    mongoConnect,
    mongoDisconnect
}