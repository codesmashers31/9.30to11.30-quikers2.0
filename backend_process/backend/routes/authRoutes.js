import express from 'express'
import { authController } from '../controllers/authController.js';



const router =  express.Router()

router.post("/data",authController)


export default router;

// http://localhost:3000/api/auth/data