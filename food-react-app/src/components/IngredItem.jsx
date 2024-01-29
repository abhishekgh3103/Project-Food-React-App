import styles from './ingredItem.module.css';

export default function IngredItem({item}){
    return (
        <div className={styles.itemDiv}>   
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.itemAmt}>{item.amount + item.unit}</p>
        </div>
    )
}