import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './nav.css';
import logo_small from '../Assets/images/logo_small.png'
import { FaRegUser } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState('Home');

  return (
    <div className="nav-menu">
      <div className="nav-logo">
        <img src={logo_small} alt="" />
      </div>
      <ul className="nav-list">
        <li onClick={() => {setMenu('Home')}}><Link style={{textDecoration: 'none'}} to='/' >Home</Link> {menu === 'Home' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('Pre-Loved')}}> <Link style={{textDecoration: 'none'}} to='/Preloved' >PreLoved</Link>  {menu === 'Pre-Loved' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('CraftsWorld')}}> <Link style={{textDecoration: 'none'}} to='/CraftsWorld' >CraftsWorld</Link>  {menu === 'CraftsWorld' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('About')}}> <Link style={{textDecoration: 'none'}} to='/About' >About</Link>  {menu === 'About' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('Contact')}}> <Link style={{textDecoration: 'none'}} to='/Contact' >Contact</Link>  {menu === 'Contact' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-button">
        <Link to='/Cart'>
          <a>
            <div className="icon-style">
              <BsCart2 />
            </div>
          </a>
        </Link>
        <div className="cart-count">0</div>
        <Link to='/Login'>
          <a>
          <div className="icon-style">
          <FaRegUser />
            </div>

          </a>
          </Link>
          

          </div>
         
          
        {/* <Link to='/Login'><button>Register</button></Link> */}
        
      </div>
    
  );
};

export default Nav;
