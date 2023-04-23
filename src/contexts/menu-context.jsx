import { createContext, useContext, useState, useEffect } from "react";
import { fakeFetch } from "../api/fakefetch";

export const MenuContext = createContext();

export const MenuProvider = ({children}) =>{

    const [menu, setMenu] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [checkboxInput, setCheckBoxInput] = useState([]);
    const [radioInput, setRadioInput] = useState(null);

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


    const handleSearch = (e) =>{
        setSearchInput(e.target.value);  
    }

    const handleCheckBox = (checkType) => {
        checkboxInput.includes(checkType) ? 
            setCheckBoxInput( checkboxInput.filter(type => type !== checkType) ) : 
                setCheckBoxInput([...checkboxInput, checkType]); 
    }

    const handleSortRadioBtn = (sortFlow) =>{
       setRadioInput(sortFlow); 
    }

    const newMenu = [...menu]

    const filteredCheckBox = checkboxInput.length > 0 ? 
        newMenu.filter((item)=> checkboxInput.every(checkbox => item[checkbox])) : 
            newMenu; 

    const filteredSearch = searchInput ? 
        filteredCheckBox.filter(({name})=> name.toLowerCase().includes(searchInput.toLowerCase())) : 
            filteredCheckBox;

    const filteredSort = radioInput ? 
        filteredSearch.sort((item1, item2) => radioInput === 'lowtohigh' ? item1.price - item2.price : item2.price - item1.price) : 
            filteredSearch;

    return(
        <MenuContext.Provider value={{ isLoading, searchInput, handleSearch, handleCheckBox, handleSortRadioBtn, filteredSort}}>
            {children}
        </MenuContext.Provider>
    )
}

export const useMenu = () => useContext(MenuContext);