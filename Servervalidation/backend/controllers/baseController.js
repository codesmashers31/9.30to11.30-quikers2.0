import baseModel from '../models/baseModel.js'
export const baseAdding = async(req,res)=>{

try {
    

    const {baseid,basename,basecategory,basestatus} = req.body
    
    // console.log(baseid,basename,basecategory,basestatus);
    
  const base_Adding = await baseModel.create({baseid,basename,basecategory,basestatus})
  res.status(201).json({msg:"Successfully added"})

} catch (error) {
    console.log('error',error);
    res.status(404).json({msg:"Data issues"})
    
}

}


export const showdata = async(req,res)=>{
   try {
    
   
    const getdata = await baseModel.find()
    //console.log(getdata);
    res.status(200).json({getdata})

} catch (error) {
       console.log('error',error);
       
   }


}



export const editdatas = async(req,res)=>{
        
    
    //console.log(req.params);

    const {id} = req.params


    const show = await baseModel.findById(id)

    res.status(200).json({show})
    





}



export const updatedata = async(req,res)=>{

    //console.log(req);

    //  const {id} = req.params
    // const {baseid,basename,basecategory,basestatus} = req.body

    const updatedaats = await baseModel.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json({msg:"Successfully Updated"})

}