import express from 'express'
import { userController } from '../controllers/dataControllers.js';

const routes = express.Router()

routes.post("/user",userController)


export default routes;


// http://localhost:3000/api/data/user