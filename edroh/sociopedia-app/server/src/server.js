import http from "http";
import app from "./app.js";
import { connectToMongoDB } from "./services/mongo.js";

const PORT = process.env.PORT || 6001;
const server = http.createServer(app);

async function startServer(){
  await connectToMongoDB()
  .then(() => {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  })
  .catch((err) => console.error(`${err} did not connect`));
};

startServer();







// import express  from "express";
// import bodyParser from "body-parser";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";
// import helmet from "helmet";
// import multer from "multer";
// import morgan from "morgan";
// import path from "path";
// import { fileURLToPath } from "url";
// import { register } from "./controllers/auth.js";


// /* CONFIGURATION */

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// dotenv.config()
// const app = express()
// app.use(express.json())
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));
// app.use(morgan("common"));
// app.use(bodyParser.json({ limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
// app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// /* FILE STORAGE */
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null, "public/assets");
//     },
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({storage});

// app.post("/auth/register", upload.single("picture"), register)
// /*MONGOOSE SETUP*/
// const PORT = process.env.PORT || 6001
// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     app.listen(PORT, () => console.log(`Server is listening on ${PORT}`))
// })
// .catch((err) => console.log(`${err} did not connect`));