import { config } from "dotenv"
import app from "./app.js";
import { connectToMongoDB } from "./utils/mongo.js";
import { seedData, deleteData } from "./utils/seeder.js";
config()

const PORT = process.env.PORT || 8000;


const server = app;

async function startServer(){
    await connectToMongoDB();
    // data seeding 

    
    // await seedData();
    // await deleteData();
    server.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`)
    })
};


startServer();