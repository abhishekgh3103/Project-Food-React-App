import { useEffect, useState } from "react";
import FoodRecIntro from "./FoodRecIntro";
import FoodRecIngred from "./FoodRecIngred";
import FoodRecInstruction from "./FoodRecInstruct";
import styles from './foodRecipe.module.css'

export default function FoodRecipe({foodId}){
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = 'c079678a8d4f4fb4bf4936d9a906bfed';
    const [foodInfo, setFoodInfo] = useState({});
    useEffect(()=>{
        async function fetchFood(){
            const resp = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await resp.json()
            console.log(data);
            setFoodInfo(data);
        }
        fetchFood()
    }, [foodId])
    return (
        <div className={styles.recipeDiv}>
            <FoodRecIntro foodInfo={foodInfo}/>
            <FoodRecIngred foodInfo={foodInfo}/>
            <FoodRecInstruction foodInfo={foodInfo}/>
        </div>
    );
}