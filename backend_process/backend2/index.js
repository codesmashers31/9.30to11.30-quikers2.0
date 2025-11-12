import express from 'express'
import dotenv from 'dotenv'
import dataRoutes from './routes/dataRoutes.js'
import connectDb from './config/db.js';
import cors from 'cors';

dotenv.config();




connectDb()
const app =express()

app.use(cors())

app.use(express.json())

app.use("/api/data",dataRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Conneceted http://localhost:${PORT}`)
})

// http://localhost:3000/api/data