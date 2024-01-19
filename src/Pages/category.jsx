import React, { useContext } from 'react'
import './css/category.css'
import { unistorecontext } from '../Context/unistorecontext'
import { FaSort } from "react-icons/fa";
import Item from '../Components/items/item';

const Category = (props) => {
    const {all_items} = useContext(unistorecontext);
  return (
    <div>
        <div className="category-indexSort">
            <p>
                <span>Showing 1-12</span> out of 36 items
            </p>
        </div>
        <div className="category-sort">
            Sort by <FaSort />
        </div>
        <div className="category-products">
            {all_items.map((item, i)=>{
                if (props.category===item.category){
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                }
                else {
                    return null;
                }
                
            })}
        </div>
    </div>
  )
}

export default Category