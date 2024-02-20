import React from 'react'
import './recommended.css'
import Item from '../items/item'
import all_items from '../Assets/all_items'

const Recommended = () => {
  return (
    <div className='Recommended'>
        <h1>Recommended Products</h1>
        <div className="recommended-list">
        {all_items.map((item, i) => {
    if (item.category === "craftsworld") {
      if (i < 3) {
        return (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        );
      } else {
        return null; // Return null for items beyond the third
      }
    } else {
      return null; // Skip items with other categories
    }
  })
}

        </div>
    </div>
  )
}

export default Recommended