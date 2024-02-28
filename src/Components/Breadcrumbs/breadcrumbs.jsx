import React from 'react'
import './breadcrumbs.css'
import { IoIosArrowForward } from "react-icons/io";
import picture1 from '../Assets/images/cw_nav.png'
import picture2 from '../Assets/images/pl_nav.png'

const Breadcrumbs = (props) => {
    const {product} = props;
    if (product.category==="craftsworld" ) {
      return <div>
        <div className='top-image'><img src={picture1} alt="" /></div>
        <div className='breadcrumb'>
      UniStore <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}
    
        </div>

      </div>;
    }
  return (
    <div>
      <div className='top-image'><img src={picture2} alt="" /></div>
      <div className='breadcrumb'>
      UniStore <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}
    
        </div>
    </div>
  )
}

export default Breadcrumbs