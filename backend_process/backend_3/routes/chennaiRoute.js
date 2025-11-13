import express from 'express'
import { chennai_Data_Adding } from '../controllers/handle_Chennai_Controller.js';


const chennairoutes = express.Router()

// http://localhost:3000/api/chennai/bus

chennairoutes.post("/bus",chennai_Data_Adding)

export default chennairoutes;