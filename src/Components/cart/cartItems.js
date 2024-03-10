import React,{useContext} from 'react'
import './cart.css'
import UnistorecontextProvider from '../../Context/unistorecontext';

export const CartItems = () =>  {  
   const {getTotalCartAmount,all_items,cartItems,removeFromCart} = useContext(UnistorecontextProvider);
    return (
        <div className='cartItems'>
            <div className="cartItems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_items.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return <div>
                    < div className="cartItems-format">
                            <img src={e.image} alt="" className="carticon-product-icon"/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>{e.new_price*cartItems[e.id]}</p>
                            <img src="" onClick={()=> {removeFromCart(e.id)}} alt=""/>
                            
                    </div>
                    <hr/>        
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-iem">
                            <p>Delivery Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-iem">
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    
                    </div>
                    <button>CHECKOUT</button>
                </div>
            </div>
            
        </div>
    )
    }

    //importremoveicon
