import React, { useEffect } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex"; 
import { useState } from "react";


const Meal =()=>
{
    const [url, setUrl] = useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [recipes, setRecipes] = useState([]);
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("");
    useEffect(()=>
    {
        fetch(url).then(res=>res.json()).then(data=>{
            console.log(data.meals);
            setRecipes(data.meals);
            setShow(true);
        })
    },[url])

    const setIndex=(alpha)=>
    {
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe=(evt)=>
    {
        if(evt.key==="Enter")
        {
            setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    return(
        <>
        <div className="container allrecipes">
            <div className="main-head">
                <h4>What are you planning to cook?</h4>
                <h5>Check Recipes!</h5>
            </div>
            <div className="searchBox">
                <input type="search" className="search-bar" onChange={e=>setSearch(e.target.value)} 
                onKeyPress={searchRecipe}></input>
            </div>
            <div className="container allrecipes">
                {
                    show? <MealItem data={recipes}/> : "Sorry no recipe found!"
                }
            </div>
            <div className="indexContainer">
                <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
            </div>                       
        </div>
        <section className="container bg-dark text-white">
                
                    <div className="footer ">
                    Copyright © 2022 Bootcamp
                    </div>
                
                </section>
            
        
        
        </>
    )
}

export default Meal;