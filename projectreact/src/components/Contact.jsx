import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Contact = ()=>{

  const navication = useNavigate()
     
  const [formdatas,setFormDatas] = useState({username:"",useremail:""})
  const [datas,setDatas] = useState([])
    

  const handlechange = (fazil)=>{

    //console.log(fazil.target.value);
    

    setFormDatas({...formdatas,[fazil.target.name]:fazil.target.value})

    //console.log(formdatas);
    
    

  }


  const hanldesubmit = (e)=>{

    e.preventDefault()
    
   setDatas(formdatas)

   const changedata = JSON.stringify(datas)
  
   localStorage.setItem("userdatas",changedata)

   alert("Succfully done")
setFormDatas({username:"",useremail:""})

navication("/navbar")


  }

    return <>

    <div>
      
     <form onSubmit={hanldesubmit}>
      <label>UserName</label>
      <input type="text" onChange={handlechange} value={formdatas.username} name="username" placeholder="Enter the name" />
      <label>Email</label>
      <input type="email" onChange={handlechange} value={formdatas.useremail} name="useremail" placeholder="Enter the Email" />

      <input type="submit" value="Register" />
     </form>
       
      

    </div>

    </>

}


export default Contact;