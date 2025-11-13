import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [routes,setRoutes] = useState({fromroute:"",toroute:""})
  const [datas,setDatas] = useState({})


  const handlechange = (e)=>{

    const valuesdata = e.target.value

    setRoutes({...routes,[e.target.name]:valuesdata})

  }

  const handlesubmit = async(e) => {

       e.preventDefault()

       const chennaiRoutesRes = await axios.post("http://localhost:3000/api/chennai/bus",routes)
       
       //console.log(chennaiRoutesRes);
       
       alert(chennaiRoutesRes.data.msg)

       setRoutes({fromroute:"",toroute:""})

       setDatas(chennaiRoutesRes.data.dataadding)


  }
  

  return (
    <div>
      <div>
        <h1>Enter the Chennai's Best Routes</h1>
      </div>
      <form onSubmit={handlesubmit}>
        <label>Chennai Routes (From)</label>
        <input type='text' onChange={handlechange} value={routes.fromroute} name='fromroute' placeholder='Enter the From Route'/>
        <br /><br />
         <label>Chennai Routes (To)</label>
        <input type='text'  onChange={handlechange} value={routes.toroute} name='toroute' placeholder='Enter the To Route'/>

        <input type="submit" value="Register" />
      </form>


      <div>
        <h1>{datas.fromroute}</h1>
        <h1>{datas.toroute}</h1>
        <h1>{datas.id}</h1>
      </div>
    </div>
  )
}

export default App
