import React from 'react'
import './footer.css'
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
    const isLoginOrRegister =
    window.location.pathname.startsWith('/Login') ||
    window.location.pathname.startsWith('/CreateAccount') ||
    window.location.pathname.startsWith('/Finish');
  return (
    <div className={isLoginOrRegister? 'footer hidden':'footer'}>
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