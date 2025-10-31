import { useReducer } from "react"

 const initstate = {count:0} 

 const reducer = (state,action)=>{
    console.log('compunete reducere');
    
switch (action.type){
    case "INCREMENT":
      return {count:state.count+1}
    case "DECREMENT": 
      return {count:state.count-1}
      case "RESET":
      return {count:0}
    default:
      return state
}
 
 



 }
const App = () => {
 console.log('Compoenent running');
  const [state,dispatch] = useReducer(reducer,initstate)

  return (
    <div>
      <h1>Count:{state.count}</h1>
     <div>
      <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment ++ </button>
      <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement --</button>
      <button onClick={()=>dispatch({type:"RESET"})}>Reset </button>
     </div>
    </div>
  )
}

export default App
