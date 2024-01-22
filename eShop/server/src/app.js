import express from 'express';
import api from './routes/index.js';


// Middlewares

const app = express()


app.use("/v3", api)
export default app;