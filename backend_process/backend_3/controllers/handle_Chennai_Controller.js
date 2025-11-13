import chennaiRoutesModel from "../models/chennaiRoutesDatas.js";

export  const chennai_Data_Adding = async(req,res)=>{

    // console.log(req.body);

    

    try {

        const {fromroute,toroute} = req.body

        const dataadding = await chennaiRoutesModel.create({fromroute,toroute});
        res.status(201).json({msg:"Succfully Added",

            dataadding
        })

        console.log('data added done');
        
        
    } catch (error) {
        console.log('Error',error);
          res.status(404).json({msg:"Somethings error",error})
        
    }
    


}