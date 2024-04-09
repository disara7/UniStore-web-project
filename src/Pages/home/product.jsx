import React, { useContext } from 'react'
import { unistorecontext } from '../../Context/unistorecontextProvider.jsx'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../Components/Breadcrumbs/breadcrumbs.jsx';
import ProductDisplay from '../../Components/ProductDisplay/product_display.jsx';
import '../css/product.css'
import SellerProfile from '../../Components/Seller_Profile/SellerProfile.jsx';
import Recommended from '../../Components/Recommended/Recommended.jsx';



const Product = () => {
  
  const {all_items} = useContext(unistorecontext);
  console.log('all_items:', all_items);
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