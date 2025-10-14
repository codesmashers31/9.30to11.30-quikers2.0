import { Link, Route, Routes } from "react-router-dom"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Regsiter from "./components/Register"




const  App = ()=> {

  // const navigate = useNavigate();
  
  // const obj = {
  //   name:"React",
  //   newclass:"Node"
  // }


  // const movetocontact = ()=>{

  //   navigate("/contact")

  // }

  return (
    <>
  

   {/* <Navbar/> */}

     <Routes>
       <Route path="/navbar" element={<Navbar />} />
      <Route path="/contact" element={<Contact   />} />
      <Route path="/register" element={<Regsiter   />} />
    </Routes>
 
    {/* <Navbar  datas={obj}     />

     <Contact  datanew={obj}   /> */}


     {/* <Link to="/contact" state={obj}>Go to Contect</Link> */}





     {/* <button onClick={movetocontact}>Move to Contect</button> */}
    
    </>
  )
}

export default App
