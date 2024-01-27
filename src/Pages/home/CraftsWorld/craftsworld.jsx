import React from 'react'
import './craftsworld.css'
import Searchbar from '../../../Components/searchbar/searchbar'
import CwFilter from '../../../Components/filter/cwfilter'
import Item from '../../../Components/items/item'
import data_product from '../../../Components/Assets/preloved_items'

const CraftsWorld = () => {
  return (
    <div className='craftsworld'>
      <div className='crafts-top'>
        <h1>CraftsWorld</h1>
        <p>Promoting sustainability and creativity within the 
          university undergraduate community, providing a 
          platform for the small-scale businesses owned by 
          university undergraduates that sell their unique 
          handmade crafts, encouraging extracurricular activities 
          and entrepreneurship among the university community.</p>
        
    </div>
    <Searchbar/>
    <div className="page-content">
      <div className="left">
        <CwFilter/>

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

export default CraftsWorld