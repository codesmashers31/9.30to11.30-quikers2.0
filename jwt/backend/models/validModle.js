import mongoose from 'mongoose'

const validSchema = new mongoose.Schema({
    
    firstName: { type: String },
    email: { type: String, unique:true },

    password: { type: String },

    createdby: { type: String, default: "users" },
    updatedby: { type: String, default: "Admin" }

}, { timestamps: true })

const validModel = mongoose.model("validcollection", validSchema)

export default validModel;
