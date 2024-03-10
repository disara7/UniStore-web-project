import React, { createContext, useState  } from 'react';
import all_items from '../Components/Assets/all_items';


export const unistorecontext = createContext(null);

const getDefaultCart = () =>{
    let cart={};
    for(let index= 0; index < all_items.length+1; index++){
        cart[index]=0;
    }
    return cart;
}
export const UnistorecontextProvider = (props) => {
    const [cartItems,setCartItems]= useState(getDefaultCart());

      
   const addToCart = (itemId) =>{
    setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}));
    console.log(cartItems);
}
const removeFromCart = (itemId) =>{
    setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
   }
const getTotalCartAmount = () => {
    let totalAmount=  0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo = all_items.find((product) =>product.id===Number(item))
            totalAmount += itemInfo.new_price* cartItems[item];
        }
        return totalAmount;
    }

}

const getTotalCartItems = () => {
    let totalItem =0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItem += cartItems[item];
        }
    }
    return totalItem;
}
   

   const contextValue = { getTotalCartAmount,getTotalCartItems,all_items,cartItems,addToCart,removeFromCart };
   

    return (
        <unistorecontext.Provider value={contextValue}>
            {props.children}
        </unistorecontext.Provider>
    ); 
};

export default UnistorecontextProvider;
