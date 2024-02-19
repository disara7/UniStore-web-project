import React, { useContext } from 'react'
import { unistorecontext } from '../../Context/unistorecontext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../Components/Breadcrumbs/breadcrumbs';
import ProductDisplay from '../../Components/ProductDisplay/product_display';
import '../css/product.css'
import picture from '../../Components/Assets/images/cw_nav.png'


const Product = () => {
  
  const {all_items} = useContext(unistorecontext);
  const {productId} = useParams();
  const product = all_items.find((e)=> e.id === Number(productId));
  return (
    <div className='product'>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product