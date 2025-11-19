import express from 'express'
import { authlogin, validuser } from '../controllers/authController.js';
import { authmiddleware } from '../middlewares/authmiddleware.js';


const routes = express.Router()

// http://localhost:3000/api/auth/login
// http://localhost:3000/api/auth/dashboard
routes.post("/login",authlogin)

routes.get("/dashboard",authmiddleware,validuser)


export default routes;