import React from 'react'
import './footer.css'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src="" alt="" />
            <p>UniStore</p>
        </div>
        <ul className="foot-links">
            <li>Preloved</li>
            <li>CraftsWorld</li>
            <li>About</li>
            <li>Contact</li>
            <li>Donate</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
            <BsInstagram />

            </div>
        </div>
    </div>
  )
}

export default Footer