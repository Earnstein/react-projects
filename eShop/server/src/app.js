import express from 'express';
import api from './routes/index.js';
import morgan from "morgan"
import cors from "cors"


const app = express()
// Middlewares

app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
}))

app.use(express.json())
app.use(morgan('dev'));




app.use("/api/v3", api)


export default app;