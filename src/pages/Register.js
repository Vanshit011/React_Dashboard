import React, { useState } from 'react'
import '../style/Register.css';
import { useNavigate } from 'react-router';
// import Register from './Register';

function Register() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  })

  //store value in  local Storage 
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login")
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register </h2>
      <div className="form-group">
        <label>name:</label>
        <input name="name"
          value={input.name}
          onChange={(e) => setInput({
            ...input, [e.target.name]: e.target.value,
          })}
          type='name' />
      </div>
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
      <button type="submit">Register</button>
    </form>
  );
}

export default Register