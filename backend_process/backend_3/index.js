import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import chennaiRoute from './routes/chennaiRoute.js'
import connectDB from './config/db.js'


dotenv.config()

connectDB()

const appdata = express()

const PORT = process.env.PORT || 5000

appdata.use(cors())

appdata.use(express.json())


// http://localhost:3000/api/chennai
appdata.use("/api/chennai",chennaiRoute)


appdata.listen(PORT,()=>{
    console.log(`Server Connecteed done http://localhost:${PORT}`);
    
})
