import React from 'react';
import './searchbar.css';
import { IoSearch } from 'react-icons/io5';

const Searchbar = () => {
  return (
    <div>
      <form className="search-container">
        <div className='search-icon-container'>
          <IoSearch className='search-icon' />
        </div>
        <input type="text" id="search-bar" placeholder="What can I help you with today?" />
      </form>
    </div>
  );
}

export default Searchbar;
