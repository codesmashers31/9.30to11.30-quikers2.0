import express from 'express'
import { baseAdding, editdatas, showdata, updatedata } from '../controllers/baseController.js';


const routes = express.Router()

// http://localhost:3000/api/base/baseadded
// http://localhost:3000/api/base/showbasedata
// http://localhost:3000/api/base/editid/1
// http://localhost:3000/api/base/update/1
routes.post("/baseadded",baseAdding)
routes.get("/showbasedata",showdata)
routes.get("/editid/:id",editdatas)
routes.put("/update/:id",updatedata)

export default routes;