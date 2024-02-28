import React from 'react'
import './sellerprofile.css'
import { FaRegUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { FiMail } from "react-icons/fi";
import whatsapp from '../Assets/images/whatsapp.png'
import facebook from '../Assets/images/facebook.png'
import instagram from '../Assets/images/instagram.png'

const SellerProfile = () => {
  return (
    <div className='seller'>
        <h1>Seller Profile</h1>
        <div className="details">
            <table>
                <tr>
                    <td className='socials-icon'><FaRegUser /></td>
                    <td><p>C. K. Lenadora</p></td>
                    
                </tr>
                <hr />
                <tr>
                    <td className='socials-icon'><LuPhone /></td>
                    <td><p>+94 75 123 3221</p></td>
                </tr>
                <hr />
                <tr>
                    <td className='socials-icon'><FiMail /></td>
                    <td><p>cklenadora@gmail.com</p></td>
                </tr>
            </table>
            <hr />
            <h2>Social Media</h2>
        </div>
        
        <div className="socials">
            <img src={whatsapp} alt="" />
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
        </div>
    </div>
  )
}

export default SellerProfile