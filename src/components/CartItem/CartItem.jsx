import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import Cart from '../Cart/cart';
import Item from '../Item/item';
import styles from '../CartItem/cartitem.module.css'



const CartItem = ({ id, name, price, quantity }) => {
   
    

    
  
    return (
    <>
      <div className={styles.Cartitem}>
        <p>{name}</p>
        <p>Precio por Unidad: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>

      
    </>
    );
  };
  
  export default CartItem;