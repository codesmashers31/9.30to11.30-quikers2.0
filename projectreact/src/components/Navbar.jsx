import { Link } from "react-router-dom";


const Navbar = ({cartcvalue})=>{


     

    return <>

     <div className="bg-white p-5 fixed w-full">
         <span>Cart : {cartcvalue}</span> 
     
     </div>

    </>

}


export default Navbar;