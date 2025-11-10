
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import dataRoutes from './routes/dataRoutes.js'

dotenv.config()


const app = express()

const PORT = process.env.PORT || 5000


app.use(cors())

app.use(express.json())

app.use("/api/data",dataRoutes)


app.listen(PORT,()=>{
    console.log(`Server Succfully done http://localhost:${PORT}`);
    
})
// /user/:id

// http://localhost3000/api/data

// /user/100

// re=30