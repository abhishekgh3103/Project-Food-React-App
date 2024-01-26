import styles from "./foodItem.module.css"
export default function FoodItem({food}) {
    return (
        <div className={styles.itemDiv}>
            <h2>{food.title}</h2>
            <img src={food.image} alt={`${food.title} image`} />
        </div>
    )
}