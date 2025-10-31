import  { useContext, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "./Navbar";

function EasyAutoGrowInput() {
  // const textRef = useRef(null);
  const inputref = useRef(null);


  //console.log(useContext(AuthContext));
  
const {values,setValues} = useContext(AuthContext)

  // 📌 Function runs when user types
  // const handleInput = () => {
  //   const textarea = textRef.current;
  //   textarea.style.height = "auto"; // Reset
  //   textarea.style.height = textarea.scrollHeight + "px"; // Grow
  // };

   const handleclick = ()=>{

    setValues(values+1)

   }
  
  


  const handleinput1 = ()=>{
      

  
      
  }

  return (
    <>
    {/* <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <textarea
        ref={textRef}
        onChange={handleInput} // Directly attached here
        placeholder="Type something..."
        className="p-3 w-1/2 text-lg rounded-xl outline-none resize-none text-gray-900 shadow-lg"
        rows={1}
        style={{
          overflow: "hidden",
          minHeight: "40px",
          backgroundColor: "white",
        }}
      ></textarea>
    </div> */}
   


    <div>
      <Navbar/>
      <div ref={inputref} contentEditable onInput={handleinput1}
      suppressContentEditableWarning={true} placeholder="Type Somthing.."
   className="p-3 my-10 w-1/2 min-h-[40px] max-h-[200px] bg-white text-gray-900 text-lg rounded-xl shadow-lg border border-gray-400 overflow-auto focus:outline-none"
        style={{
          whiteSpace: "pre-wrap", // allows wrapping
          wordBreak: "break-word", // breaks long words
        }}   >

      </div>
    </div>
    
    <div>
      <button onClick={handleclick}>Click</button>

      <h1>{values}</h1>
    </div>
   </>






  );
}

export default EasyAutoGrowInput;