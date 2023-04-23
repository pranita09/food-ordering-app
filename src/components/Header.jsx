import { NavLink } from "react-router-dom"
import { useCart } from "../contexts/cart-context";

const Header = () =>{
    const {cart} = useCart();
    return(
        <>
            <nav>
                <NavLink className='navLink' to='/'>Home</NavLink>
                <NavLink className='navLink' to='/menu'>Menu</NavLink>
                <NavLink className='navLink' to='/cart'>Cart({cart.length})</NavLink>
            </nav>
        </>
    )
}

export default Header;