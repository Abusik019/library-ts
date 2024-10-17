import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
// app.user() router

const startServer = async() => {
    try{
        // await mongoose.connect(process.env.MONGO_URL as string);
        console.log('mongo was connected');
    } catch(e) {
        console.log(e);
        process.exit(1);
    }
}

startServer()

export default app;