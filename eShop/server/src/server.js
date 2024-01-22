import { config } from "dotenv"
import app from "./app.js";
config()

const PORT = process.env.PORT || 8000;


const server = app;

async function startServer(){
    server.listen(PORT, () => {
        console.log(`server is listening on ${PORT}`)
    })
};


startServer();