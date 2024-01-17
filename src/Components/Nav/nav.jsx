import './nav.css'
import { BsCart2 } from "react-icons/bs";

import React from 'react'

const Nav = () => {
  return (
    <div className="nav-menu">
        <ul className="nav-list">
            <li>Home <hr /></li>
            <li>Preloved</li>
            <li>CraftsWorld</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="nav-button">
            <a><BsCart2 /></a>
            <button>Register</button>
        </div>
    </div>
  )
}

export default Nav
