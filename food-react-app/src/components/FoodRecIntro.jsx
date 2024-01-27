import styles from './foodRecIntro.module.css'
export default function FoodRecIntro({foodInfo}) {
    return (
        <div className={styles.introDiv}>
            <div className={styles.titleDiv}>
                {foodInfo.title}
            </div>
            <div className={styles.imgDiv}>
                <img src={foodInfo.image} alt={`${foodInfo.title} image`} />
            </div>
            <div className={styles.introDetails}>
                <p>Price Per Serving: ${foodInfo.pricePerServing}</p>
                <p>Servings: {foodInfo.servings}</p>
                <p>Ready In:{foodInfo.readyInMinutes}</p>
                <p>{foodInfo.vegetarian ? 'Vegetarian': 'Non-Vegetarian'}</p>
            </div>
        </div>
    );
}