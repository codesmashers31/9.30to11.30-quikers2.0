import mongoose from "mongoose";


const baseConnectDB = async()=>{

    try {
        const base = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected done Db running..${base.connection.host}`);
        
        
    } catch (error) {
        console.log('error',error);
        
    }

    


}

export default baseConnectDB