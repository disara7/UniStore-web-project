import React from 'react';
import './searchbar.css';
import { IoSearch } from 'react-icons/io5';

const Searchbar = () => {
  return (
    <div className='search'>
      <form className="search-container">
        <div className='search-icon-container'>
          <IoSearch className='search-icon' />
        </div>
        <input type="text" id="search-bar" placeholder="Type here to search..." />
      </form>
    </div>
  );
}

export default Searchbar;
