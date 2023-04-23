import { useMenu } from "../contexts/menu-context";
import MenuCard from "../components/MenuCard";

const Menu = () =>{

    const { isLoading, handleSearch, handleCheckBox, handleSortRadioBtn, filteredSort} = useMenu();

    return(
        <>
            { isLoading ? 
                (<h1>Loading...</h1>) :
                    (
                        <>
                            <h1>Filters: </h1>
                            <input 
                                placeholder='Search food here' 
                                onChange={handleSearch}  
                            />
                            <label>
                                <input 
                                    type='checkbox' 
                                    onChange={()=> handleCheckBox('is_vegetarian')}    
                                /> Veg
                            </label>
                            <label>
                                <input 
                                    type='checkbox'
                                    onChange={()=>handleCheckBox('is_spicy')}
                                /> Spicy
                            </label>
                            <label>
                                <input 
                                    type='radio'
                                    onChange={()=> handleSortRadioBtn('lowtohigh')}
                                    /> Sort(price) Low to High
                            </label>
                            <label>
                                <input 
                                    type='radio'
                                    onChange={()=>handleSortRadioBtn('hightolow')}
                                    /> Sort(price) High to Low
                            </label>
                            <h1>Menu</h1> 
                            <div className='all-menu'>
                                {
                                    filteredSort.map((item)=>{
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