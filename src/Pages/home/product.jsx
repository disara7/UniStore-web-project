import React, { useContext } from 'react'
import { unistorecontext } from '../../Context/unistorecontext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../Components/Breadcrumbs/breadcrumbs';
import ProductDisplay from '../../Components/ProductDisplay/product_display';
import '../css/product.css'
import SellerProfile from '../../Components/Seller_Profile/SellerProfile';
import Recommended from '../../Components/Recommended/Recommended';



const Product = () => {
  
  const {all_items} = useContext(unistorecontext);
  const {productId} = useParams();
  const product = all_items.find((e)=> e.id === Number(productId));
  return (
    <div className='product'>
      <Breadcrumbs product={product}/>
      <ProductDisplay product={product}/>
      <SellerProfile/>
      <Recommended/>
    </div>
  )
}

export default Product