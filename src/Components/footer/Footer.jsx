import React from 'react'
import './footer.css'
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { useLocation } from 'react-router-dom';

const Footer = () => {
    let location = useLocation();

    const hideFooterOnPages = ['/Login', '/CreateAccount', '/Finish','/BecomeSeller'];
    const shouldHideFooter = hideFooterOnPages.includes(location.pathname);
    
    if (shouldHideFooter) {
        return null;
    } 
    
    
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="" alt="" />
            {/* <p>UniStore</p> */}
        </div>
        <ul className="foot-links">
            <li>Preloved</li>
            <li>CraftsWorld</li>
            <li>About</li>
            <li>Contact</li>
            <li>Donate</li>
        </ul>
        <div className="socials">
            <div className="footer-social-icons">     
                <BsInstagram />
            </div>
            <div className="footer-social-icons">     
                <BsWhatsapp />   
            </div>
            <div className="footer-social-icons">     
                <BsFacebook />  
            </div>
        </div>
        <div className="div footer-copright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer