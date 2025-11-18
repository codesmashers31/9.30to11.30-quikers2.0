import { useState } from "react"
import axios from 'axios'


const App = () => {
 
  const [validDatas,setValidDatas] = useState({firstName:"",email:"",password:""})
  const [validMessage,setValidMessage] = useState("")


  const validChange = (e)=>{

    const {name,value} = e.target
    setValidDatas({...validDatas,[name]:value})

    //console.log('Valid',validDatas);
    

  }

  const validSubmit = async(e)=>{
     
    e.preventDefault()
   
   try {

    const validCheck = await axios.post("http://localhost:3000/api/validate/xyz",validDatas)

    //console.log(validCheck);
    setValidMessage(validCheck.data.msg)
    setValidDatas({firstName:"",email:"",password:""})
    
   } catch (error) {
         //console.log(error);
       if(error.response){
        setValidMessage(error.response.data.msg)
       }else{
        setValidMessage("Something Went Wrong")
       }
    
   }
    
   
   

  }

  return (
    <div>
          <form onSubmit={validSubmit}>
            <input type="text" onChange={validChange} name="firstName" placeholder="Enter the Valid Name"  value={validDatas.firstName} />
            <input type="email" onChange={validChange} name="email" placeholder="Enter the Valid Email"  value={validDatas.email} />
            <input type="password" onChange={validChange} name="password" placeholder="Enter the Valid password"  value={validDatas.password} />
            <input type="submit" value='Register' />
          </form>

          <p>{validDatas.firstName}</p>
          <p>{validDatas.email}</p>
          <p>{validDatas.password}</p>

          <div>
            {validMessage && <p style={{color:"red"}}>{validMessage}</p>}
          </div>
    </div>

   
  )
}

export default App
