import React from 'react'
import './breadcrumbs.css'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = (props) => {
    const {product} = props;
  return (
    <div className='breadcrumb'>
        UniStore <IoIosArrowForward /> {product.section} <IoIosArrowForward /> {product.category} <IoIosArrowForward /> {product.name}
    </div>
  )
}

export default Breadcrumbs