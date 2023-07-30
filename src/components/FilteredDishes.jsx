import React, { useState } from 'react'

function FilteredDishes(props) {

    let [allMenus, setAllmenu] = useState(props.allMenus);
    let [filteredDishes, setFilteredDishes] = useState([]);
    let [activeDishes, setActiveDishes] = useState();

    function showFilterDishesHandler(category) {
        setActiveDishes(category)

        let filteredDishesAre = allMenus.filter((item) => {
            return item.strCategory === category

        }).map((item) => {
            
            return (
                
                
                <li><img className='br' src={item.strMealThumb} alt="" /></li>
                
            )
        })

        setFilteredDishes(filteredDishesAre)
        console.log("dishes length", filteredDishes.length )

    }
    //category
    let category = props.category.map((item) => {
        return (
            <li className={ item.strCategory == activeDishes ? "active":""} onClick={() => { showFilterDishesHandler(item.strCategory) }}>{item.strCategory}</li>

        )
    })
    return (
        <div className='fltered-dishes'>
            <div className='container'>
                <div className='text-center'>
                    <h2>Choose your dishes</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo error illum? Quos sint sed laboriosam odio? Vel, nobis esse?</p></div>
                <div className='filtered-dishes'><ul>{category}</ul></div>
                <div className='filtered-dishes-results'>
                   
                    <ul className='flex flex-wrap gap-30'>
                    {filteredDishes.length > 0 ? filteredDishes : <h2 className='text-center'>No item found</h2> }
                    </ul>
                </div>
            </div>  

        </div>
    )
}

export default FilteredDishes
