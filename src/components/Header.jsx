import { NavLink } from "react-router-dom"

const Header = () =>{
    return(
        <>
            <nav>
                <NavLink className='navLink' to='/'>Home</NavLink>
                <NavLink className='navLink' to='/menu'>Menu</NavLink>
                <NavLink className='navLink' to='/cart'>Cart</NavLink>
            </nav>
        </>
    )
}

export default Header;