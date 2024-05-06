import React from 'react'
// import { FaLiraSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate()
    const handleLogout = () => {
      localStorage.setItem("loggedOut", true);
      localStorage.removeItem("user");
      navigate("/login");
    }
  return (
    <div>
        <button onClick={handleLogout}>logout </button>

    </div>
  )
}

export default Logout