import { useRef, useState } from "react";
import "./index.css"

const App = ()=> {

  console.log('Running...');
  

const nameRef = useRef();
const displayref = useRef(null);
const message = useRef(false);




const valuestakle = ()=>{

//console.log(nameRef.current.value);

const Refname = nameRef.current.value;

displayref.current.innerText = `Welcome ${Refname}`
//console.log(Refname);






localStorage.setItem("users",Refname)
 message.current = true

 console.log(message.current);
 


}


  return (
    <>
   
   <label>Enter The Name</label> :
   <input ref={nameRef} type="text"  onChange={valuestakle} placeholder="Enter the name"  />

  

   <p ref={displayref}></p>

    <p>{message.current?"Saving":"Not Save"}</p>
      
      
    </>
  )
}

export default App









