import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

//connect mongdb
await connectDB();

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('This is server')
})

app.listen(PORT, ()=>{
    console.log("Server listening at port : ", PORT);
})