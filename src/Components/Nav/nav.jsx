import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './nav.css';
import logo_small from '../Assets/images/logo_small.png'
import { FaRegUser } from "react-icons/fa";


const Nav = () => {
  // const [menu, setMenu] = useState('Home');
  const [clicked,setClicked]= useState(false);
  const [scrolled,setScrolled] = useState(false);
  const isLoginOrRegister =
    window.location.pathname.startsWith('/Login') ||
    window.location.pathname.startsWith('/CreateAccount') ||
    window.location.pathname.startsWith('/Finish');

  const handleClick = () => {
    setClicked(!clicked);
  }
  const changeBg = () => {
    if (window.scrollY >= 90) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  const activedPath = window.location.pathname;


  window.addEventListener('scroll',changeBg);

  return (
    <div className={`nav-menu ${scrolled ? 'active' : ''} ${isLoginOrRegister ? 'hidden' : ''}`}>
      <div className='left-part'>
        <div className="nav-logo">
          <img src={logo_small} alt="" />
        </div>
        <div>
          <ul id="nav-list" className={clicked ? '#nav-list active': '#nav-list'}>
            <li><a className={activedPath === '/' ? "active":""} href="./">Home</a></li>
            <li><a className={activedPath === '/Preloved' ? "active":""} href="./Preloved">PreLoved</a></li>
            <li><a className={activedPath === '/CraftsWorld' ? "active":""} href="./CraftsWorld">Craftsworld</a></li>
            <li><a className={activedPath === '/About' ? "active":""} href="./About">About</a></li>
            <li><a className={activedPath === '/Contact' ? "active":""} href="./Contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className='right-part'>
        <div className="nav-button">
          <div>
              <a href='./Cart'>
                <div className="icon-style">
                  <BsCart2 />
                </div>
              </a>
            <div className="cart-count">0</div>
          </div>
          <div>
              <a href='./Login'>
              <div className="icon-style">
                <FaRegUser />
              </div>
              </a>
          </div>

        </div>
        <div id='mobile' onClick={handleClick}>
          <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'mobileOverlay active' : 'mobileOverlay'} onClick={handleClick}></div>
      </div>

    </div>

  );

}

export default Nav;
