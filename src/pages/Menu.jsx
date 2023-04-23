import { useMenu } from "../contexts/menu-context";
import MenuCard from "../components/MenuCard";

const Menu = () =>{

    const {menu, isLoading} = useMenu();

    return(
        <>
            { isLoading ? 
                (<h1>Loading...</h1>) :
                    (
                        <>
                            <h1>Menu</h1> 
                            <div className='all-menu'>
                                {
                                    menu.map((item)=>{
                                        return(
                                            <MenuCard key={item.id} item={item}/>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
            }       
        </>
    )
}

export default Menu;