import React from 'react'
import './filter.css'

const PlFilter = () => {
  return (
    <div className='filter'>
        <h2>Categories</h2>
        <ul>
          <li><h3><a href="">Luggage and Bags</a></h3></li>
          <ul className='sub-list'>
            <li><a href="">Wallet & ID Holder</a></li>
            <li><a href="">Backpacks</a></li>
            <li><a href="">Hand Bags</a></li>
            <li><a href="">Traveling Bags and Luggage</a></li>
          </ul>
          <li><h3><a href="">Fashion and Clothing</a></h3></li>
          <li><h3><a href="">Electronic Accessories</a></h3></li>
          <li><h3><a href="">Sport Equipment</a></h3></li>
          <li><h3><a href="">Educational Material</a></h3></li>
          <li><h3><a href="">Musical Instruments</a></h3></li>
          <li><h3><a href="">Furniture and Home Goods</a></h3></li>
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