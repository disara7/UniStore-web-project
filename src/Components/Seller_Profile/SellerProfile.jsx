import React from 'react'
import './sellerprofile.css'
import { FaRegUser } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { FiMail } from "react-icons/fi";

const SellerProfile = () => {
  return (
    <div className='seller'>
        <h1>Seller Profile</h1>
        <div className="details">
            <table>
                <tr>
                    <td><FaRegUser /></td>
                    <td><p>C. K. Lenadora</p></td>
                </tr>
                <tr>
                    <td><LuPhone /></td>
                    <td><p>+94 75 123 3221</p></td>
                </tr>
                <tr>
                    <td><FiMail /></td>
                    <td><p>cklenadora@gmail.com</p></td>
                </tr>
            </table>
            
        </div>
        <h2>Social Media</h2>
        <div className="socials">

        </div>
    </div>
  )
}

export default SellerProfile