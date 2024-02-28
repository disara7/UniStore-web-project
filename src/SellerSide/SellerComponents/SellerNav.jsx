import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
import { BsCart2 } from 'react-icons/bs';
import './SellerNav.css';
import logo_small from '../../Components/Assets/images/logo_small.png'
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink, useLocation } from 'react-router-dom';


const SellerNav = () => {
  // const [menu, setMenu] = useState('Home');
  const [clicked,setClicked]= useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }
  
  const {pathname} = useLocation();

  return (
    <div className="sellernav-menu">
      <div className='left-part'>
        <div className="sellernav-logo">
          <img src={logo_small} alt="" />
        </div>
        <div>
          <ul id="sellernav-list" className={clicked ? '#sellernav-list active': '#sellernav-list'}>
           <li><Link className={pathname === '/SellerDashboard' ? "active":""} to="/SellerDashboard">Dashboard</Link></li>
            <li><Link className={pathname === '/SellerDashboard/SellerStatistic' ? "active":""} to="/SellerDashboard/SellerStatistic">Statistic</Link></li>
            <li><Link className={pathname === '/SellerDashboard/Products' ? "active":""} to="/SellerDashboard/Products">Products</Link></li>
            <li><Link className={pathname === '/SellerDashboard/about' ? "active":""} to="/SellerDashboard/about">About</Link></li>
            <li><Link className={pathname === '/SellerDashboard/Contact' ? "active":""} to="/SellerDashboard/Contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className='right-part'>
        <div className="sellernav-button">
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
          
            
          {/* <Link to='/Login'><button>Register</button></Link> */}
        <div id='mobile' onClick={handleClick}>
          <i id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <div className={clicked ? 'mobileOverlay active' : 'mobileOverlay'} onClick={handleClick}></div>
      </div>
        
    </div>
      
  );

}

export default SellerNav;

