import React from 'react'
import './preloved.css'
import Searchbar from '../../../Components/searchbar/searchbar'
import Filter from '../../../Components/filter/filter'
import Item from '../../../Components/items/item'
import data_product from '../../../Components/Assets/preloved_items'


const Preloved = () => {
  return (
    <div className="preloved-style">
      <div className='preloved'>
        <h1>Pre-Loved</h1>
        <p>A random paragraph can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete</p>
        
    </div>
    <Searchbar/>
    <div className="page-content">
      <div className="left">
        <Filter/>

      </div>
      <div className="right">
      {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

      </div>

      </div>
    

    </div>
    
    
    
    
  )
}

export default Preloved