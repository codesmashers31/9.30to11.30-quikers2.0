import mongoose from "mongoose";



const connectDB = async ()=>{

      try {

        const chennaidatas = await mongoose.connect(process.env.MONGO_URI)

        console.log(`Database Successfully Connected ${chennaidatas.connection.host}`);
        
        
      } catch (error) {
           
        console.log('something error',error.message);
        
      }
      


}

export default connectDB;