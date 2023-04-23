import { useState } from "react";
import MenuCard from "../components/MenuCard";
import { useCart } from "../contexts/cart-context";

const Cart = () =>{
    const {cart, totalDeliveryTime, totalPrice, handleDiscountBtn} = useCart();

    return(
        <>
            { 
                cart.length === 0 ? 
                    (<h1>Go to Menu page!</h1>) : 
                        (
                            <>
                                <h1>Cart</h1>
                                <h2>Total Delivery Time: {totalDeliveryTime} minutes</h2>
                                <h2>Total Price: Rs {totalPrice}</h2>
                                <button onClick={()=>handleDiscountBtn()}>Apply Coupon</button>
                                <div className='all-menu'>
                                    {
                                        cart.map((item)=>(
                                            <MenuCard key={item.id}  item={item} addedInCart/>
                                        ))
                                    }
                                </div>
                            </>
                        )
            }           
        </>
    )
}

export default Cart;