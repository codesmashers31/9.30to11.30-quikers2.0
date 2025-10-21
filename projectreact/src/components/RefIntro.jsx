import { useRef } from "react";

const RefIntro = ()=>{

    console.log('running');
    
   
    const myRef = useRef(3)
    
    //console.log(myRef.current);
   const newdatas =  myRef.current + 1
   
  
    return (

        
        <>
        <div>This is Ref {newdatas}</div>
        </>

    );

}


export default RefIntro;