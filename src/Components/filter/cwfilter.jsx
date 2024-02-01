import React from 'react'
import './filter.css'

const CwFilter = () => {
  return (
    <div className='filter'>
        <h2>Categories</h2>
        <ul>
          <li><h3><a href="">Accessories</a></h3></li>
          <ul className='sub-list'>
            <li><a href="">Hand-crafted Necklaces</a></li>
            <li><a href="">Bracelets</a></li>
            <li><a href="">Earrings</a></li>
            <li><a href="">Rings</a></li>
          </ul>
          <li><h3><a href="">Home Decor</a></h3></li>
          <li><h3><a href="">Art and Collectibles</a></h3></li>
          <li><h3><a href="">Paper Goods</a></h3></li>
          <li><h3><a href="">Beauty and Personal Care</a></h3></li>
          <li><h3><a href="">Seasonal and Gift Items</a></h3></li>
          <li><h3><a href="">Woodwork</a></h3></li>
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

export default CwFilter