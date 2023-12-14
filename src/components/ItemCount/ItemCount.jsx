
import { useState } from "react";
import styles from './Itemcount.module.css';

const ItemCount = ({stock, initial, onAdd, }) => {
    const [quantity , setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
           
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
           
        }
    }



    return (
        <div className="Counter">
            <div className={styles.Controls}>
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
            </div>
            <div>
                <button className={styles.Button} onClick={() => { onAdd(quantity); }} disabled={!stock}>
                    Agregar al carrito
                </button>

            </div>

        </div>

    )
}

export default ItemCount