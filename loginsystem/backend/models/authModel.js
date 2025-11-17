import mongoose from 'mongoose'

const authShema = new mongoose.Schema({
    
    username: { type: String,required:true,trim:true },
    email: { type: String, trim:true,required:true,lowercase:true},

    password: { type: String,required:true },

    createdby: { type: String, default: "users" },
    updatedby: { type: String, default: "Admin" }

}, { timestamps: true })

const authModel = mongoose.model("register", authShema)

export default authModel;
