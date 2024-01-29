import IngredItem from './IngredItem'
import styles from './foodRecIngred.module.css'
export default function FoodRecIngred({foodInfo, isLoading}) {
    return (
        <div className={styles.foodIngredDiv}>
            <h2>Ingredients</h2>
            {isLoading ? '...Loading': foodInfo.extendedIngredients.map((item)=> <IngredItem item={item} key={item.key}/>)}
        </div>
    )

}