import styles from "./foodItem.module.css"
export default function FoodItem({food, setFoodId}) {
    return (
        <div className={styles.itemDiv}>
            <img className={styles.itemImage} src={food.image} alt={`${food.title} image`} />
            <div className={styles.itemTitleContainer}>
                <p className={styles.itemTitle}>{food.title}</p>
            </div>
            <div className={styles.itemMoreContainer}>
                <button onClick={()=>setFoodId(food.id)} className={styles.itemButton}>View Recipe</button>
            </div>
        </div>
    )
}