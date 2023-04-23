import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])
    const [giveDiscount, setGiveDiscount] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleAddToCartBtn = (itemToAdd) =>{
        cart.includes(itemToAdd) ? null : setCart((cart)=> [itemToAdd, ...cart]);
    }

    const isItemInCart = (itemToCheck) => cart.includes(itemToCheck);

    const totalDeliveryTime = cart.reduce((acc, {delivery_time})=> acc+delivery_time,0)

    useEffect(()=>{
        setTotalPrice(cart.reduce((acc, {price})=> acc+price,0));
        setGiveDiscount(true);
        // console.log('useeffect',giveDiscount);
    },[cart])

    const handleDiscountBtn = () =>{
        // console.log('outside handler',giveDiscount);
        if(giveDiscount){
            setGiveDiscount(false);
            setTotalPrice((totalPrice)=> totalPrice - 5);
        }
    }
    // console.log('outer',giveDiscount)
    return (
        <CartContext.Provider value={{cart, handleAddToCartBtn, isItemInCart, totalDeliveryTime, totalPrice, handleDiscountBtn}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);