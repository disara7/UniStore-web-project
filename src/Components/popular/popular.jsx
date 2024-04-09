import React from 'react';
import './popular.css';
import data_product from '../Assets/data.js';
import Item from '../items/item.jsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography } from '@mui/material';

function Popular() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const initialItemsToShow = 3;

  return (
    <div className='popular'>
      <Typography variant="h1">Top Picks for You</Typography>
      <hr />
      <Carousel 
        responsive={responsive} 
        containerClass="carousel-container" 
        itemClass="carousel-item" 
        autoPlay={true} 
        autoPlaySpeed={1000}
        showDots={false}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        infinite={true}
        partialVisible={initialItemsToShow}
      >
        {data_product.map((item, i) => (
          <div className="slide" key={i}>
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Popular;
