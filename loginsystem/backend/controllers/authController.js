import bcrypt from 'bcrypt'
import authModel from '../models/authModel.js'
export const authcreate = async(req,res)=>{

//   console.log(req.body);
  try {

    const {username,email,password} = req.body

    if(!username || !email || !password) {
    return res.status(404).json({msg:"Please Fill the all feild"})
    
    }

const saltround = 10
const hashed = await bcrypt.hash(password,saltround)

const savedatas = await authModel.create({username,email,password:hashed})
 
return res.status(201).json({msg:"Succfully Done"})
    
  } catch (error) {
    console.log('Error',error.message);
    
  }
  
}


export const authlogin = async (req,res)=>{


    try {

    const {email,password} = req.body

    if(!email || !password) {
    return res.status(404).json({msg:"Please Fill the all feild"})
    
    }

 const userdata = await authModel.findOne({email})

 //console.log(userdata);
 

 if(!userdata) return res.status(404).json({msg:"Invalid user"})

 const match = await bcrypt.compare(password,userdata.password)

 if(!match) return res.status(404).json ({msg:"Enter the valid Password"})


 const datas = {id:userdata._id,name:userdata.username,email:userdata.email}   

return  res.status(200).json({datas})


    
  } catch (error) {
    console.log('Error',error.message);
    
  }
  
}


