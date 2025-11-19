import express from 'express'
import { validdatas } from '../controllers/validcontroller.js';



const routes = express.Router()

// http://localhost:3000/api/validate/validdatas

routes.post("/xyz",validdatas)


export default routes;