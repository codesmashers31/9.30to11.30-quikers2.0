import validModel from "../models/validModle.js"

import jwt from "jsonwebtoken";


export const authlogin = async (req,res)=>{


    try {

    const {email,password} = req.body

    if(!email || !password) {
    return res.status(404).json({msg:"Please Fill the all feild"})
    
    }

 const userdata = await validModel.findOne({email})

 //console.log(userdata);
 

 if(!userdata) return res.status(404).json({msg:"Invalid user"})

//  const match = await bcrypt.compare("12345","12345")

//  if(!match) return res.status(404).json ({msg:"Enter the valid Password"})


 
  
   
  const token =  jwt.sign({id:userdata._id,email:userdata.email},process.env.JWT_SECRET,{expiresIn:"1d"})
   console.log('this is token',token);
   

  const datas = {id:userdata._id,name:userdata.username,email:userdata.email}   

  return  res.status(200).json({datas,token})

    
  } catch (error) {
    console.log('Error',error.message);
    
  }
  
}



export const validuser = async(req,res)=>{
    console.log(req);
    
    res.json({data:"succfully done"})

} 