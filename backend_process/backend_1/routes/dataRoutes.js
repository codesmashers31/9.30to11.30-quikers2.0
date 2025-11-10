import express from 'express'
import { dataController, headerController, quesryController, userController } from '../controllers/dataController.js'


const routes = express.Router()


routes.post("/user",userController)
routes.get('/datas/:user_id',dataController)
routes.get('/query',quesryController)
routes.get('/auth',headerController)

export default routes;

// http://localhost:3000/api/data/user
// http://localhost:3000/api/data/datas/100
// http://localhost:3000/api/data/query
// http://localhost:3000/api/data/auth