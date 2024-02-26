import React from 'react'
import './filter.css'
import { Link } from 'react-router-dom'

const CwFilter = () => {
  return (
    <div className='filter'>
        <h2>Categories</h2>
        <ul>
          <li><h3><Link>Accessories</Link></h3></li>
          <ul className='sub-list'>
            <li>Hand-crafted Necklaces</li>
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Rings</li>
          </ul>
          <li><h3>Home Decor</h3></li>
          <li><h3>Art and Collectibles</h3></li>
          <li><h3>Paper Goods</h3></li>
          <li><h3>Beauty and Personal Care</h3></li>
          <li><h3>Seasonal and Gift Items</h3></li>
          <li><h3>Woodwork</h3></li>
        </ul>
        <div className="price-filter">
          <h2>Price</h2>
        </div>
    </div>
  )
}

export default CwFilter