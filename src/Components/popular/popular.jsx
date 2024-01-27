import React, { useEffect, useState } from 'react';
import './popular.css';
import data_product from '../Assets/data';
import Item from '../items/item';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Popular  = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data_product.length);
    }, 3000); // Change item every 3 seconds
  
    return () => clearInterval(interval);
  }, [data_product.length]);

    return (
      <div className='popular'>
        <h1>Top Picks for You</h1>
        <hr />
        <div className='carousel'>
          
          <div className="popular-item">
            {data_product.map((item, i) => (
              <Item
                className={`slide ${currentSlide === i ? 'active' : ''}`}
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
          </div>
  
          
        </div>
      </div>
    );
  }

export default Popular
