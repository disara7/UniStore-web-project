import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import './nav.css';

const Nav = () => {
  const [menu, setMenu] = useState('Home');

  return (
    <div className="nav-menu">
      <ul className="nav-list">
        <li onClick={() => setMenu('Home')}>Home {menu === 'Home' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('Preloved')}>Preloved {menu === 'Preloved' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('CraftsWorld')}>CraftsWorld {menu === 'CraftsWorld' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('About')}>About {menu === 'About' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('Contact')}>Contact {menu === 'Contact' ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-button">
        <a>
          <div className="icon-style">
            <BsCart2 />
          </div>
        </a>
        <div className="cart-count">0</div>
        <button>Register</button>
      </div>
    </div>
  );
};

export default Nav;
