import React, { useEffect, useState } from 'react';
import './popular.css';
import data_product from '../Assets/data';
import Item from '../items/item';

const Popular = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data_product.length);
    }, 3000); // Change slide every 3 seconds
  
    return () => clearInterval(interval);
  }, [data_product.length]);

  return (
    <div className='popular'>
      <h1>Top Picks for You</h1>
      <hr />
      <div className='slideshow'>
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
        {window.innerWidth < 768 && (
        <div className="dots">
          {data_product.map((_, i) => (
            <button
              key={i}
              className={`dot ${currentSlide === i ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
            >
              {'•'}
            </button>
          ))}
        </div>)}
      </div>
    </div>
  );
};

export default Popular;
