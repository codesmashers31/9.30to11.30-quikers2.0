import mongoose from "mongoose";

const connectDb= async()=>{
    try {
        const data=await mongoose.connect(process.env.MONGO_URI)
        console.log(`coneceted ${data.connection.host}`);
        
    } catch (error) {
        console.log('error',error);
        
    }

}

export default connectDb