import mongoose from "mongoose";


mongoose.connection.once("open", () => {
    console.log("Mongodb connection is ready!...");
  });
  
  mongoose.connection.on("error", (err) => {
    console.error(err);
  });

  
async function mongoConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.log(error);
    throw new Error("Unable to connect to mongodb");
  }
}

async function mongoDisconnect() {
  try {
    await mongoose.disconnect;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to disconnect from mongodb");
    
  }
}


export {
    mongoConnect,
    mongoDisconnect
}