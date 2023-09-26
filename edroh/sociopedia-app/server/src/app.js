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
import { postRouter } from "./routes/post/post.router.js";
import { verifyToken } from "./middleware/auth.js";
import { httpCreatePost } from "./routes/post/post.contoller.js";


/* FILEPATH AND DIRECTORIES CONFIGURATION */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* CONFIGURATION / MIDDLEWARES SETUP*/
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
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
app.post("/post", verifyToken, upload.single("picture"), httpCreatePost);



/*APP ROUTES */
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

export default app;
