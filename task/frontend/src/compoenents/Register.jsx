import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

       
  const navicate = useNavigate()
   const [registerdatas,setregisterdatas] = useState({username:"",email:"",password:""});


  const handlechange = (e)=>{

    setregisterdatas({...registerdatas,[e.target.name]:e.target.value})



  }


  const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const register_data = await axios.post(
      "http://localhost:3000/api/auth/register",
      registerdatas
    );

    alert(register_data.data.msg);
    setregisterdatas({ username:"", email:"", password:"" });
    navicate('/login');

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
        <input type="text" onChange={handlechange} name="username" value={registerdatas.username} placeholder='Enter the User Name'  />
         <input type="text" onChange={handlechange} name="email" value={registerdatas.email} placeholder='Enter the Valid email'  />
          <input type="text"  onChange={handlechange} name="password" value={registerdatas.password} placeholder='Enter the password'  />
          <button type='submit'>Register</button>
      </form>
    </div>

    </div>
  )
}

export default Register
