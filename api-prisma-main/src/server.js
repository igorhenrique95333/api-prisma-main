import express from "express";
import dotenv from 'dotenv';
import mainRoutes from './routes/main.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

server.use(mainRoutes);
server.use(userRoutes);

server.listen(process.env.PORT);