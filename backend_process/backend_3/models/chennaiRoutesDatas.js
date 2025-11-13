import mongoose from "mongoose";


const chennaiRouteSchema = new mongoose.Schema({
    fromroute:String,
    toroute:String,
})


const chennaiRoutesModel = mongoose.model("chennaiRoutesColl",chennaiRouteSchema)

export default chennaiRoutesModel;