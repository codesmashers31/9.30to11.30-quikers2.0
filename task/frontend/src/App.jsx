import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {



  const [formData, setFormData] = useState({
    baseid: "",
    basename: "",
    basecategory: "",
    basestatus: 0,
    createdby: "users",
    updatedby: "Admin",
  });

  const [showdata,setShowData] = useState([])

  const [editid,setEditid] = useState(null)

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

     const basedataadd = await axios.post("http://localhost:3000/api/base/baseadded",formData)
    console.log(basedataadd);
    
     alert(basedataadd.data.msg);
     setFormData({
    baseid: "",
    basename: "",
    basecategory: "",
 
  
  })
    
  };


  const getdatas = async () => {
     
    const getdata = await axios.get("http://localhost:3000/api/base/showbasedata")
    //console.log(getdata.data.getdata);

  
    
    setShowData(getdata.data.getdata)
    
    
  }


  
useEffect(()=>{
  (async ()=> {
    await getdatas();
  })()
},[showdata])
 


const editdatas = async(id)=>{

  //alert(id)

  const editdata = await axios.get(`http://localhost:3000/api/base/editid/${id}`)
  
  //console.log(editdata.data.show);
  
   setFormData(editdata.data.show)
  setEditid(id)


}



const editedthedatas = async(e)=>{
        e.preventDefault()
    const update = await axios.put(`http://localhost:3000/api/base/update/${editid}`,formData)
       

    alert(update.data.msg);

    setFormData({
    baseid: "",
    basename: "",
    basecategory: "",
 
  
  })

   setEditid(null)
    
}


  return (
    <div>
       <form onSubmit={handleSubmit} style={{ width: "400px", margin: "20px auto" }}>
      <h2>Add Base Data</h2>

      <label>Base ID</label>
      <input
        type="text"
        name="baseid"
        value={formData.baseid}
        onChange={handleChange}
        required
      />

      <label>Base Name</label>
      <input
        type="text"
        name="basename"
        value={formData.basename}
        onChange={handleChange}
        required
      />
 
      <label>Base Category</label>
      <input
        type="text"
        name="basecategory"
        value={formData.basecategory}
        onChange={handleChange}
        required
      />

      <label>Status</label>
      <select
        name="basestatus"
        value={formData.basestatus}
        onChange={handleChange}
      >
        <option value={0}>Inactive</option>
        <option value={1}>Active</option>
      </select>
     
     {editid?<button onClick={editedthedatas} type="button">Update</button>:<button type="submit">Submit</button>}
      
      
    </form>

    
    <div>

      {showdata.map((e)=>(
          <div key={e._id}>
            <p>{e._id}</p>
        <h1>{e.baseid}</h1>
        <h2>{e.basename}</h2>
        <p>{e.basecategory}</p>
        <button onClick={()=>editdatas(e._id)}>Edit</button>
      </div>

      ))}
      
    </div>





    </div>
  )
}

export default App
