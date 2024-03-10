import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './nav.css';
import logo_small from '../Assets/images/logo_small.png'
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
//import { unistorecontext } from '../../Context/unistorecontext';


const Nav = () => {
  // const [menu, setMenu] = useState('Home');
  //const {getTotalCartItems} = useContext(unistorecontext);
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
          <li><NavLink className={activedPath === '/' ? "active":""} to="/">Home</NavLink></li>
            <li><NavLink className={activedPath === '/Preloved' ? "active":""} to="/Preloved">PreLoved</NavLink></li>
            <li><NavLink className={activedPath === '/Craftsworld' ? "active":""} to="/CraftsWorld">CraftsWorld</NavLink></li>
            <li><NavLink className={activedPath === '/About' ? "active":""} to="/About">About</NavLink></li>
            <li><NavLink className={activedPath === '/Contact' ? "active":""} to="/Contact">Contact</NavLink></li>
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
