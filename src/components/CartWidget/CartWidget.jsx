import cart from "./assets/cart.svg"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
   
    return (
    
        <div>
        <Link to='/cart' className="CartWidget" >
            <img className="CartImg" src={cart} alt="cart-windget" />
            {totalQuantity > 0 && totalQuantity}
        </Link>
        </div>
        
    )
    
}


export default CartWidget