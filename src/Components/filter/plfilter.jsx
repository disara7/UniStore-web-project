import React from 'react'
import './filter.css'
// import {Link} from 'react-router-dom';

const PlFilter = () => {
  return (
    <div className='filter'>
        <h2>Categories</h2>
        <ul>
          <li><h3>Luggage and Bags</h3></li>
          <ul className='sub-list'>
            <li>Wallet & ID Holder</li>
            <li>Backpacks</li>
            <li>Hand Bags</li>
            <li>Traveling Bags and Luggage</li>
          </ul>
          <li><h3>Fashion and Clothing</h3></li>
          <li><h3>Electronic Accessories</h3></li>
          <li><h3>Sport Equipment</h3></li>
          <li><h3>Educational Material</h3></li>
          <li><h3>Musical Instruments</h3></li>
          <li><h3>Furniture and Home Goods</h3></li>
        </ul>
        <div className="price-filter">
          <h2>Price</h2>
          <div className="price">
            <input type="text" placeholder='LKR'/>
            <p className='dash'>-</p>
            <input type="text" placeholder='LKR'/>
            <button>OK</button>
          </div>
        </div>
    </div>
  )
}

export default PlFilter