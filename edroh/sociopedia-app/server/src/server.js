import http from "http";
import app from "./app.js";
import { connectToMongoDB, seedData } from "./services/mongo.js";




const PORT = process.env.PORT || 6001;
const server = http.createServer(app);

async function startServer(){
  await connectToMongoDB()
  .then(async () => {
    // await seedData();
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  })
  .catch((err) => console.error(`${err} did not connect`));
};

startServer();