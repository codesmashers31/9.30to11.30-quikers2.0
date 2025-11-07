import React, { useState } from 'react'

import axios from 'axios'

const App = () => {

  const [daats,setDatas] = useState("")
  
  const handlechange =(e)=>{

   const name = e.target.value
    
   setDatas(name)


  }

   const handlesubmit = async(e)=>{
    e.preventDefault()

    console.log(daats);
    

    const res = await axios.post("http://localhost:3000/api/auth/data",{daats})
    console.log(res);
    
       
      

    
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
             
             <input type="text" onChange={handlechange} />

             <input type="submit" value="Submit" />
              
      </form>
    </div>
  )
}

export default App
