import React, { useState } from 'react';
import '../css/login.css';
import { Link } from 'react-router-dom';
import login_pic from '../../Components/Assets/images/login.png';
import { FiUser } from "react-icons/fi";
import { GoKey } from "react-icons/go";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted:', { username, password });
  };

  return (
    <div className='login'>
      <div className="image">
        <img src={login_pic} alt="Login" />
      </div>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>

          <div className="user-box">
          <div className="inputbox">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
              <label>E-mail Address</label>
              <div className="login-icons">
              <FiUser />
              </div>
            </div>
            
          </div>
          
          <div className="user-box">
          <div className="inputbox">
          <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
            <div className="login-icons">
            <GoKey />
              </div>
            
            </div>
            
          </div>
          <button type="submit" className='login-button'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
        </form>
        <div className="textline">
          <h3>Are you new? 
            <Link to='/CreateAccount' >
            <a> Click here </a>

            </Link>
             to create an account.</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
