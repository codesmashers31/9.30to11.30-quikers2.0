import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

       
  const navicate = useNavigate()
   const [loginDatas,setLoginDatas] = useState({email:"",password:""});


  const handlechange = (e)=>{

    setLoginDatas({...loginDatas,[e.target.name]:e.target.value})



  }


  const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const login_data = await axios.post(
      "http://localhost:3000/api/auth/login",
      loginDatas
    );

    console.log(login_data);
    

    //alert(login_data.data.msg);
    setLoginDatas({ username:"", email:"", password:"" });
    navicate('/dashboad');

  } catch (error) {
    if (error.response) {
      alert(error.response.data.msg);
    } else {
      alert("Server Error");
    }
  }
};


  return (
    <div>
      <div>
      <form onSubmit={handlesubmit}>
        
         <input type="text" onChange={handlechange} name="email" value={loginDatas.email} placeholder='Enter the Valid email'  />
          <input type="text"  onChange={handlechange} name="password" value={loginDatas.password} placeholder='Enter the password'  />
          <button type='submit'>Register</button>
      </form>
    </div>

    </div>
  )
}

export default Login
