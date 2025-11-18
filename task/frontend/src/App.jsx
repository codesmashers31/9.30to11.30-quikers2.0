
import { Route, Routes } from 'react-router-dom';
import Register from './compoenents/Register';
import Login from './compoenents/Login';
import Dashboard from './compoenents/Dashboard';



const App = () => {




  return (
  <>
   <Routes>
    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboad' element={<Dashboard/>}/>
   </Routes>


    </>
  )
}

export default App
