import bcrypt from 'bcrypt'
import validModel from '../models/validModle.js'

export const validdatas = async(req,res)=>{

console.log(req.body);

try {
const {firstName,email,password} = req.body 

if(!firstName || !email || !password){
    return res.status(400).json({msg:"Please Fill the all Feild"})
}

const checkEmail = await validModel.findOne({email})

if(checkEmail){
    return res.status(409).json({msg:"Already the Email is register Please Login"})
}
// const saltKeyround =12
const encrptpassword = await bcrypt.hash(password,10)

const insert = await  validModel.create({firstName,email,password:encrptpassword})

res.status(201).json({msg:"Successfully Inserted",insert})
    
} catch (error) {

    res.status(500).json({msg:"Sever error",err:error.message})
    
}


}