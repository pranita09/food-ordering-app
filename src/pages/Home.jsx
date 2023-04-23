const { NavLink } = require("react-router-dom")

const Home = () =>{
    return(
        <div>
            <h1>Welcome to neoG Food Ordering App</h1>
            <button><NavLink to='/menu'>Menu Page</NavLink></button>
        </div>
    )
}

export default Home;