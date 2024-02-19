import React from 'react';
import './productdisplay.css';
import { FaStar } from 'react-icons/fa6';

const ProductDisplay = (props) => {
    const { product } = props;

    // Check if product is undefined or does not have 'images' property
    if (!product || !product.images) {
        return <div>Loading...</div>; // or handle the case when product is not available
    }

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    {product.images.map((image, index) => (
                        <img key={index} src={image} alt={`Product ${index + 1}`} />
                    ))}
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <FaStar color='yellow' />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar color='grey' />
                    <p>(122)</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
