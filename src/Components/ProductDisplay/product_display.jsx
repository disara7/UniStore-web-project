import React from 'react';
import './productdisplay.css';
import { FaStar } from 'react-icons/fa6';

const ProductDisplay = ({ product }) => {
  // Check if product is undefined or images is not an array
  if (!product ) {
    return <div>Loading or error message...</div>;
  }

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img className='productdisplay-list-img' 
            src={product.image} 
            alt={product.name} />
            <img className='productdisplay-list-img' 
            src={product.image} 
            alt={product.name} />
            <img className='productdisplay-list-img' 
            src={product.image} 
            alt={product.name} />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className="prices"><h2>{product.new_price}</h2> <h3>{product.old_price}</h3></div>
        <div className='productdisplay-right-star'>
          <FaStar color='yellow' />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar color='grey' />
        </div>
        <p className='description'>{product.description}</p>
        <button className='add-to-cart'>
        Add to Cart
      </button>
      </div>
      

    </div>
  );
};

export default ProductDisplay;
