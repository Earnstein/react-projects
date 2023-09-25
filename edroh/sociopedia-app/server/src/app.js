import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import multer from "multer";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import { register } from "./routes/auth/auth.controller.js";
import { userRouter } from "./routes/user/user.router.js";
import { authRouter } from "./routes/auth/auth.router.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();


/* CONFIGURATION / MIDDLEWARES SETUP*/
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


/* FILE STORAGE */
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
app.post("/auth/register", upload.single("picture"), register);



/*APP ROUTES */
app.use("/auth", authRouter);
app.use("/user", userRouter);

export default app;
