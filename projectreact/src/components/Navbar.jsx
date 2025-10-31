import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


const Navbar = ()=>{

const {values} = useContext(AuthContext)
     

    return <>

     <div className="bg-white p-5 fixed w-full">
         <span>Cart : {values}</span> 
     
     </div>

    </>

}


export default Navbar;