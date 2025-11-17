import express from 'express'
import { authcreate, authlogin } from '../controllers/authController.js';



const routes = express.Router()

// http://localhost:3000/api/auth/register
// http://localhost:3000/api/auth/login

routes.post("/register",authcreate)
routes.post("/login",authlogin)


export default routes;