import React, {useContext, useState} from 'react';
import './productdisplay.css';
import { FaStar } from 'react-icons/fa6';
import {UnistorecontextProvider} from '../../Context/unistorecontext';


const ProductDisplay = ({ product }) => {
 
  const {addToCart}= useContext(UnistorecontextProvider);
  const [selectedImage, setSelectedImage] = useState(product.image);

  
  const handleImageClick = (newImage) => {
    setSelectedImage(newImage);
  };

  

  // Check if product is undefined or images is not an array
  if (!product ) {
    return <div>Loading or error message...</div>;
  }

  

  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className="product-images">
        <div className='productdisplay-img-list'>
          
          <img className='productdisplay-list-img' 
          src={product.image} 
          alt={product.name} 
          onClick={() => handleImageClick(product.image)}/>
          <img className='productdisplay-list-img' 
          src={product.image1} 
          alt={product.name} 
          onClick={() => handleImageClick(product.image1)}/>
          <img className='productdisplay-list-img' 
          src={product.image} 
          alt={product.name}
          onClick={() => handleImageClick(product.image)} />
      </div>
      <div className='productdisplay-img'>
          <img className='productdisplay-main-img' 
          src={selectedImage} 
          alt={product.name} />
        </div>
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
        <button className='add-to-cart' onClick={()=>{addToCart(product.id)}}>
        Add to Cart
      </button>
      </div>
      

    </div>
  );
};

export default ProductDisplay;
