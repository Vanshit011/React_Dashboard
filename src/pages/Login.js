import React, { useState } from 'react'
import '../style/Login.css'
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: '',
    password: '',
  })

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse( localStorage.getItem("user"));  

    if (input.email === loggeduser.email && input.password === loggeduser.password) {
      {
        localStorage.setItem("loggedIn", true)
        navigate('/one');
      }
    }else{
      alert("email and password not register")
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>

        <h2>Login </h2>

        <div className="form-group">
          <label>Email:</label>
          <input
            name="email"
            value={input.email}
            onChange={(e) => setInput({
              ...input, [e.target.name]: e.target.value,
            })}
            type="email"
            required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            name="password"
            value={input.password}
            onChange={(e) => setInput({
              ...input, [e.target.name]: e.target.value,
            })}
            type="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login