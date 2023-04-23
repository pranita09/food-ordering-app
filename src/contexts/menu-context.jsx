import { createContext, useContext, useState, useEffect } from "react";
import { fakeFetch } from "../api/fakefetch";

export const MenuContext = createContext();

export const MenuProvider = ({children}) =>{

    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMenuData = async() =>{
        setIsLoading(true);
        try {
            const response = await fakeFetch('https://example.com/api/menu');
            if(response.status === 200){
                setMenu(response.data.menu);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        getMenuData();
    },[])

    return(
        <MenuContext.Provider value={{menu, isLoading}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext);