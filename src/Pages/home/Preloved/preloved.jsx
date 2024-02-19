import React from 'react'
import './preloved.css'
import Searchbar from '../../../Components/searchbar/searchbar'
import PlFilter from '../../../Components/filter/plfilter'
import Item from '../../../Components/items/item'
import data_product from '../../../Components/Assets/preloved_items'
import all_items from '../../../Components/Assets/all_items'


const Preloved = () => {
  return (
    <div className="preloved-style">
      <div className='preloved'>
        <h1>Pre-Loved</h1>
        <p>Promoting sustainability and upcycling in the undergraduate 
          community allowing university seniors to share, 
          donate, or sell their pre-owned items ranging from essential study 
          materials to personal items such as electronics, bedding, and more 
          which ultimately encourages the reuse 
          of quality goods and enables students to acquire necessities 
          inexpensively or even for free.</p>
        
    </div>
    <Searchbar/>
    <div className="page-content">
      <div className="left">
        <PlFilter/>

      </div>
      <div className="right">
      {all_items.map((item, i)=>{
                if (item.category==="preloved"){
                  return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else {
                  return null;
              }}
            )}

      </div>

      </div>
    

    </div>
    
    
    
    
  )
}

export default Preloved