import React from 'react';
import './popular.css';
import data_product from '../Assets/data';
import Item from '../items/item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';


const Popular = () => {

  return (
    <div className='popular'>
      <h1>Top Picks for You</h1>
      <hr />
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          940:{
            slidesPerView: 3,
            spaceBetween: 50,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1200:{
            slidesPerView:3,
            spaceBetween: 50
          },
          1280:{
            slidesPerView:4,
            spaceBetween: 50
          },
          1440:{
            slidesPerView:4,
            spaceBetween: 50
          }
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data_product.map((item, i) => (
        <SwiperSlide key={i}>
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        </SwiperSlide>
      ))}
        
      </Swiper>
    </div>
  );
};

export default Popular
