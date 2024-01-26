import { useEffect, useState } from "react"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c079678a8d4f4fb4bf4936d9a906bfed";
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza");
    useEffect(()=>{
        async function fetchFood() {
            const resp = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await resp.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
    },[query]);
    return(
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}