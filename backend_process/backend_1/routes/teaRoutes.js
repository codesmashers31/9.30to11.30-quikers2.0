import express from 'express';
import { getTeaDatas, insertteadetails } from '../controllers/teaController.js';



const routes = express.Router()



routes.post("/teadatas",insertteadetails)
routes.get("/gettea",getTeaDatas)

export default routes;

// Post metyhods for tea adding
// http://localhost:3000/api/tea/teadatas

// Get the values from the database
// http://localhost:3000/api/tea/gettea