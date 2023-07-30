import React, { useState, useEffect } from 'react';
import Page from "./Page"
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';
import Loader from './Loader';

function Menu() {
    let [menu, setMenu] = useState([]);
    let [menuCategory, setMenucategory] = useState([]);
    let [loading, setLoading] = useState(true);

    async function getAllTheMenu() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals);
        console.log("menu data done", data)
        setLoading(false)


    }
    async function getAllTheCategory() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setMenucategory(categoryData.categories)
        console.log("category data done", categoryData);

    }


    useEffect(() => {
        getAllTheMenu();
        getAllTheCategory();
    }, []);




    return (
        <div>
            <Page />
            {!loading ? <SpecialDishes specialMenu={menu} /> : <Loader/>
            }
            {!loading ? <FilteredDishes category={menuCategory} allMenus={menu} /> : null}



        </div>
    )
}

export default Menu
