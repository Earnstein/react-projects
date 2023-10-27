import http from "http";
import app from "./app.js";
import { mongoConnect, mongoDisconnect } from "./db/connections.js";


const server = http.createServer(app);

const PORT = process.env.PORT || 5050;


const startserver = async  () => {
  await mongoConnect();
  await mongoDisconnect();
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  });
}
//connections and listeners

startserver();