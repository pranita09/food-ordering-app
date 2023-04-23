import { NavLink } from "react-router-dom";
import { useCart } from "../contexts/cart-context";

const MenuCard = ({item, addedInCart}) =>{

    const {handleAddToCartBtn, isItemInCart} = useCart();

    const {id, name, description, price, image, is_vegetarian, is_spicy, delivery_time} = item;

    return(
        <div className='menu-card'>
            <img src={image} alt={name}/>
            <p>Name: {name}</p>
            <p><b>Description:</b> {description}</p>
            <p>Price: {price}</p>
            <p>Delivary Time: {delivery_time}</p>
            {
                !addedInCart && (
                    <button onClick={()=> handleAddToCartBtn(item)}>{ isItemInCart(item) ? <NavLink to='/cart'> Go to Cart</NavLink> : 'Add to Cart' }</button>
                )
            }
            
        </div>
    )
}
export default MenuCard;