import { useEffect, useState } from "react";

const Register = () => {
  const [formdatas, setFormDatas] = useState({ email: "", password: "", mobile: "" });
  const [msg, setMsg] = useState("");
  const [users, setUsers] = useState([]);

  const handlechange = (e) => {
    setFormDatas({ ...formdatas, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (formdatas.email === "" && formdatas.password === "" && formdatas.mobile === "") return "Please Fill the Form";
    if (!formdatas.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return "Invalid Email";
    if (formdatas.password.length < 6) return "Please enter at least 6 charactor";
    if (!formdatas.mobile.match(/^\d{10}$/)) return "Mobile Number Must be 10 Digit";
    return "";
  };

  const handlesubmit = (a) => {
    a.preventDefault();
    const result = validate();
    if (result) {
      setMsg(result);
      return;
    }
    setUsers([...users, formdatas]);
    setFormDatas({ email: "", password: "", mobile: "" });
    setMsg("");
    alert('Register Succfully done');
    
  };

  useEffect(() => {
     console.log('first running');
    localStorage.setItem("userdatas", JSON.stringify(users));
  }, [users]);

  useEffect(() => {

    console.log('running');
    
    const store = localStorage.getItem("userdatas");
    console.log(store);
    
     setUsers(JSON.parse(store));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={handlesubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">Register</h2>
          <div>
            <label className="block mb-1 text-gray-700">Enter the Email</label>
            <input
              type="email"
              name="email"
              onChange={handlechange}
              value={formdatas.email}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Enter the Password</label>
            <input
              type="password"
              name="password"
              onChange={handlechange}
              value={formdatas.password}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Enter the Mobile</label>
            <input
              type="text"
              name="mobile"
              onChange={handlechange}
              value={formdatas.mobile}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              maxLength={10}
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
          />
        </form>
        <div className="mt-4">
          <p className="text-red-500 text-center">{msg}</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-8">
        <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, i) => (
              <tr key={i + 1} className={i % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="py-2 px-4 border-b">{e.email}</td>
                <td className="py-2 px-4 border-b">{e.mobile}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Register;
