import React from "react";
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const MealItem =({data})=>
{   
    let navigate= useNavigate();
    return(
        <>
        <Wrapper> 
                          
                <Splide options={{
                    perPage:4,          
                    }}>                       
                {(!data)? "Sorry no recipe found!"
                :data.map(item=>{
                return(                    
                        <SplideSlide key={item.idMeal}>
                            <Card onClick={()=>navigate(`/${item.idMeal}`)}>                                
                                <img src={item.strMealThumb} alt="food"></img>    
                                <div className="text-wrap">
                                <p className="foodtitle">{item.strMeal}</p>
                                </div>           
                            </Card>
                        </SplideSlide>                      
                    );
                })}
                </Splide> 
        </Wrapper>  
        </>
    );
    
}

const Wrapper = styled.div`
margin: 4rem 0rem;
@media (max-width: 768px) {
    margin:1rem 0rem;
  }
`;
const Card=styled.div`
min-height: 10rem;
margin: 2rem 0rem;
position:relative;
cursor: pointer;

img{
    border-radius:1rem;
    width:240px;
    height:250px;      
    @media (max-width: 1440px) {
        width:85%;
        height:85%;
    }    
    
}  

`;

export default MealItem;