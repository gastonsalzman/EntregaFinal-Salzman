import styles from '../Cart/cart.module.css'
import CartItem from '../CartItem/CartItem'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import carritoVacio from '../../assets/carritoVacio.png'




const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)
    console.log('Total Quantity:', totalQuantity);


    if (totalQuantity === 0) {
        

        return (
            <div className={styles.CartVacio}>
                 <h2>No hay Productos en el carrito</h2>
                <div className={styles.img}>
                    <img className={styles.carritoVacio} src={carritoVacio} alt="carrito" />
                </div>
                
               
                
                
                <button className={styles.btn}>
                    <Link to='/' className='Productos'>Volver a la tienda</Link>
                </button>
                
            </div>
        )
    }

    

    return (
    <>
        <div className={styles.Cart}>
        {cart.map(p =><CartItem key={p.id} {...p} />)} 
        </div>
     


       
            
        <h3 className={styles.Total}>Total: $ {total} </h3> 
        <button onClick={() => clearCart()} className={styles.Checkout}>Limpiar Carrito</button>
        <button className={styles.Checkout}>
            <Link to='/checkout' className='Checkout'>Checkout</Link>
        </button>
    
  

        
       
    </>
    );
};

export default Cart