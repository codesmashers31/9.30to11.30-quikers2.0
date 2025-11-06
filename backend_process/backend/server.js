import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5000

const app = express();

// console.log(app);



app.listen(PORT,()=>{
    console.log(`Server Ruuning on http://localhost:${PORT}`);
    
})