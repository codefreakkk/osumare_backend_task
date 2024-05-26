import express, { Application } from "express";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import authRouter from "./routes/user.route";
import todosRouter from "./routes/todos.route";
import cors from "cors"

dotenv.config({path: './src/config/.env'})

export const app: Application = express();

const PORT = process.env.PORT || 8000;
export const API_URI = '/api';

// connect db
connectDB();

app.use(express.json());
app.use(cors());

// routes
app.use(`${API_URI}`, authRouter);
app.use(`${API_URI}`, todosRouter);

// server
const server = app.listen(PORT, () => {
    console.log(`SERVER started on ${PORT}`);
})