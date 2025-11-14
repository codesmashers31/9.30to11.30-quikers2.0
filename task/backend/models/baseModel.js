import mongoose from 'mongoose'

const baseSchema = new mongoose.Schema({
    baseid: { type: String, unique: true },
    basename: { type: String },
    basecategory: { type: String },

    basestatus: { type: Number },

    createdby: { type: String, default: "users" },
    updatedby: { type: String, default: "Admin" }

}, { timestamps: true })

const baseModel = mongoose.model("basecollection", baseSchema)

export default baseModel;
