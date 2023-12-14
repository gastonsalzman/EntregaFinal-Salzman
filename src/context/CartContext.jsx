import { createContext, useState,  } from "react";


export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total:0,
    
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0)

   

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
            setTotalQuantity((prev) => prev + quantity);
            setTotal((prev) => prev + item.price * quantity);
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const itemToRemove = cart.find((prod) => prod.id === itemId);
        if (itemToRemove) {
            const newTotalQuantity = totalQuantity - itemToRemove.quantity;
            setTotalQuantity(newTotalQuantity);
            setTotal((prev) => prev - itemToRemove.price * itemToRemove.quantity);

    }
        const cartUpdated = cart.filter((prod) => prod.id !== itemId);
            setCart(cartUpdated);
    };


    const clearCart = () => {
        console.log('Limpiando el carrito');
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>  


    )


}


export default CartProvider