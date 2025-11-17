import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import baseRoute from './routes/baseRoutes.js'
import baseConnectDB from './config/baseDB.js'
import authRoute from './routes/authRoutes.js'

dotenv.config()
baseConnectDB()
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/base",baseRoute)
app.use("/api/auth",authRoute)

const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`Server connected http://localhost:${PORT}`);
    
})


// http://localhost:3000/api/base/