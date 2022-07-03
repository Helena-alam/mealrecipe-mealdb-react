import React from "react";
import {useParams} from "react-router-dom";
import { useState } from "react";
import styled from 'styled-components';
import {Link} from "react-router-dom";

let vId="";
const RecipeInfo =()=>
{
    const [recipes, setRecipes] = useState();
    const [activeTab, setActiveTab] = useState("ingredients");
    const {MealId}=useParams();

    if(MealId!="")
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${MealId}`)
        .then(res=>res.json())
        .then(data=>{
            setRecipes(data.meals[0]);
        })
        
    }
    if(recipes)
    {
        const url = recipes.strYoutube;
        const str=url.split("=");
        vId=str[str.length-1];
    }
    return(
        <>
        {
            (!recipes)?"":(
                <>
                <section>
                <div className="hero-content container" 
                    style={{backgroundImage: `url("https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60")`, 
                    height: "90vh", width:"100%",backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center", 
                    backgroundAttachment: "fixed",           
                    }}>
                  <p className="recipetitle pt-5">You Don't Need A Silver Fork To Eat Good Food. Paul Prudhomme</p>  
                  <Link className="homelink" to="/">
                    <button className="linkbtn">Home</button></Link>
                </div>
                </section>

                <section className="detail">
                <div className="container">   
                <div className="row">
                    <div className="col-md-12 bg-dark text-white videocolumn">
                        <iframe className="recipeVideo" src={`https://www.youtube.com/embed/${vId}`}>
                        </iframe>
                        </div>
                    </div>             
                <div className="row">
                    <div className="col-md-6 leftcoloumn">
                        <div className="food">                           
                        <img src={recipes.strMealThumb} alt="food" className="recipeinfoImg shadow-lg" />
                        <br></br>
                        <h5 className="foodarea">{recipes.strArea} Food | Category: {recipes.strCategory}</h5>
                        <h6 className="foodtag">Type: {recipes.strCategory},{recipes.strTags}</h6>
                        </div>
                    </div>
                    <div className="col-md-6 rightcoloumn">
                    <div className="panel" >    
                        <h4 className="recipetitle">{recipes.strMeal}</h4><br></br>    
                            <Detailwrap>
                                <Button className={activeTab==='ingredients' ? 'btn-active' : ''}
                                onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
                                <Button className={activeTab==='instructions' ? 'btn-active' : ''}
                                onClick={()=>setActiveTab("instructions")}>Instructions</Button>

                                {activeTab === "ingredients" && (
                                    <div className="ingredients">
                                    <p className="pt-4 foodcategory">Ingredients:
                                    </p>
                                    <h5 className="foodcategory">{recipes.strIngredient1} : {recipes.strMeasure1}</h5>
                                    <h5 className="foodcategory">{recipes.strIngredient2} : {recipes.strMeasure2}</h5>
                                    <h5 className="foodcategory">{recipes.strIngredient3} : {recipes.strMeasure3}</h5>
                                    <h5 className="foodcategory">{recipes.strIngredient4} : {recipes.strMeasure4}</h5>
                                    <h5 className="foodcategory">{recipes.strIngredient5} : {recipes.strMeasure5}</h5>
                                    { (recipes.strIngredient15.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient6} : {recipes.strMeasure6}</h5>
                                    }
                                    
                                    { (recipes.strIngredient15.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient7} : {recipes.strMeasure7}</h5>
                                    }
                                    
                                    { (recipes.strIngredient15.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient8} : {recipes.strMeasure8}</h5>
                                    }
                                    
                                    { (recipes.strIngredient10.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient9} : {recipes.strMeasure9}</h5>
                                    }                                    
                                    { (recipes.strIngredient10.length===0)?"":
                                        <h5 className="foodcategory">{recipes.strIngredient10}:{recipes.strMeasure10}</h5>
                                    }
                                    { (recipes.strIngredient11.length===0)?"":
                                        <h5 className="foodcategory">{recipes.strIngredient11}:{recipes.strMeasure11}</h5>
                                    }
                                    { (recipes.strIngredient12.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient12}:{recipes.strMeasure12}</h5>
                                    }
                                    { (recipes.strIngredient13.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient13}:{recipes.strMeasure13}</h5>
                                    }
                                    { (recipes.strIngredient14.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient14}:{recipes.strMeasure14}</h5>
                                    }
                                    { (recipes.strIngredient15.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient15}:{recipes.strMeasure15}</h5>
                                    }
                                    { (recipes.strIngredient16.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient16}:{recipes.strMeasure16}</h5>
                                    }
                                    { (recipes.strIngredient17.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient17}:{recipes.strMeasure17}</h5>
                                    }
                                    { (recipes.strIngredient18.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient18}:{recipes.strMeasure18}</h5>
                                    }
                                    { (recipes.strIngredient19.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient19}:{recipes.strMeasure19}</h5>
                                    }
                                    { (recipes.strIngredient20.length===0)?"":
                                    <h5 className="foodcategory">{recipes.strIngredient20}:{recipes.strMeasure20}</h5>
                                    }
                                    </div>
                                )}
                                {activeTab === "instructions" && (
                                    <div className="ingredients">
                                    <p className="pt-4 foodcategory">Instructions:
                                    </p>
                                    <h5 className="foodcategory">{recipes.strInstructions}</h5>                            
                                    </div>    
                                )}
                            </Detailwrap>
                      </div>
                    </div>
                </div>
                </div>
                </section>
                <section className="container bg-dark text-white">
                
                    <div className="footer ">
                    Copyright © 2022 Bootcamp
                    </div>
                
                </section>
                
                </>
            )
        }
        </>
    )

}
const Detailwrap=styled.div`
.btn-active
{    
    color: white;    
    background-color: #2b4162;
    background-image: linear-gradient(315deg, #475872 0%, #5A585A 64%);
}

`;

const Button=styled.button`
padding: 1rem 2rem;
color: #313131;
background:white;
border:2px solid #081425;
cursor: pointer;
margin-right:2rem;
font-weight:600;

`;

export default RecipeInfo;