
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const UserProvider = ({children})=>{
  
    const [values,setValues] = useState(0);


    return (
        <>
         
         <AuthContext.Provider value={{values,setValues}}>
            {children}
         </AuthContext.Provider>
        
        </>
    )

}

export default UserProvider;