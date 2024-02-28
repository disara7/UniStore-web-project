import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  
  return (
    <div className='item'>
      <Link to={`/Product/${props.id}`}><img src={props.image} alt="" /></Link>
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
          <div className="itemIcon">
              <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
    </div>
  )
}

export default Item