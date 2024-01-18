import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './nav.css';

const Nav = () => {
  const [menu, setMenu] = useState('Home');

  return (
    <div className="nav-menu">
      <ul className="nav-list">
        <li onClick={() => {setMenu('Home')}}><Link style={{textDecoration: 'none'}} to='/' >Home</Link> {menu === 'Home' ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu('Preloved')}}> <Link style={{textDecoration: 'none'}} to='/Preloved' >Preloved</Link>  {menu === 'Preloved' ? <hr /> : <></>}</li>
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
          <div className="sign">
          <button>Sign In</button>

          </div>
          </Link>
          
        <Link to='/Login'><button>Register</button></Link>
        
      </div>
    </div>
  );
};

export default Nav;
