import React from 'react'
import './productdisplay.css'
import { FaStar } from "react-icons/fa6";

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <FaStar color='yellow'/>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar color='grey'/>
                <p>(122)</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay