
export  const userController = (req,res)=>{
console.log(req.body);
const {name,subject} = req.body


try {
      
if(name==="React"){
      res.status(200).json({message:"Succfully done",datas:name})
}

if(subject==="react"){
      res.status(200).json({message:"Succfully done",datas:subject})
}else{
       res.status(404).json({message:"Data is not correct"})
}

      
} catch (error) {
      res.status(404).json({message:"Bad request"})
}

}

export const dataController = (req,res)=>{
      console.log(req.params);

      const {user_id} = req.params

      if(user_id==="100"){

            res.status(200).json({message:`Reveice you id ${user_id}`})

      }

      

      
}


export const quesryController = (req,res)=>{
      console.log(req.query);
      
}

export const headerController = (req,res)=>{
      console.log(req.headers);
      
}
