import jwt from "jsonwebtoken";
export const authmiddleware = (req,res,next)=>{

    try {

        const authHeadres = req.headers.authorization

    //console.log(authHeadres);
    if(!authHeadres || !authHeadres.startsWith("Bearer"))
    {
        return res.status(401).json({success:false,msg:"No token Provied"})
    }


    const token = authHeadres.split(" ")[1]

    //console.log(token);
    
    const decoded = jwt.verify(token,process.env.JWT_SECRET)

      req.body = decoded
     next()
        
    } catch (error) {

        console.log(error);
        
        
    }

}