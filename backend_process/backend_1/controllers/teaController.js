import tea from "../models/teaShop.js";

export const insertteadetails = async(req,res)=>{

    //console.log(req.body);

    try {

        const {teashopName,address,products,amount} = req.body;

        if (!teashopName || !address || !products || !amount) {

            return res.status(400).json({msg:"Please fill the empty feild"})
            
        }

        const addtea = await tea.create({teashopName,address,products,amount})

        res.status(201).json({
            msg:"Succfully added",
            datas:addtea,
            
        })
        
    } catch (error) {
        
       console.log('something error',error.message);
       

    }





    

  

    

}



export const getTeaDatas = async(_,res)=>{


    try {

        const teadatas = await tea.find()

        res.status(200).json({datas:teadatas,
            count:teadatas.length
        })

        
    } catch (error) {
        res.status(404).json({msg:"Not getting datas"})
    }

}


