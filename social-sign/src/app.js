import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import passport from "passport";
import userRouter from "./route/index.js";
import { google_strategy } from "./middlewares/passport-middleware.js";



passport.use(google_strategy)
const app = express();
// middlewares setup
app.use(helmet())
app.use(passport.initialize())
app.use(express.json());
app.use(morgan("dev"));


app.use(userRouter)

export default app;