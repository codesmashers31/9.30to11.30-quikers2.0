import mongoose from "mongoose";

const teaSchema = new mongoose.Schema(
    {
    teashopName:{type:String, required:true},
    address:String,
    products:String,
    amount:Number,
    }
)


const tea = mongoose.model("teashopdata",teaSchema) 


export default tea;