import React from 'react'
import './item.css'

const Item = (props) => {
  
  return (
    <div className='item'>
        <img src={props.image} alt="" />
        <p className='item_name'>{props.name}</p>
        <div className='bottomPart'>
          <div className="item-price">
              <div className="new-price">
                  {props.new_price}
              </div>
              <div className="old-price">
                  {props.old_price}
              </div>
          </div>
          <div>
              <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
    </div>
  )
}

export default Item