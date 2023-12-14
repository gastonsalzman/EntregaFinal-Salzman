import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Timestamp, addDoc, collection, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../firebase/client";
import { Link } from "react-router-dom";
import swal from 'sweetalert2'


import CheckoutForm from '../CheckoutForm/CheckoutForm'
import styles from '../Checkout/checkout.module.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({name, phone, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in', ids)))
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock


                const productAddToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddToCart?.quantity

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push ({ id: doc.id, ...dataDoc})
                }

            })

            if(outOfStock.length === 0) {
                await batch.commit()
                const orderRef = collection (db, 'orders')

                const orderAdder = await addDoc(orderRef, objOrder)

                setOrderId(orderAdder.id)
                clearCart()
            } else {
                console.error ('Hay productos que estan fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading (false)
        }   
    }
    if (loading) {
        return <h1>Se esta generando su Orden...</h1>
    }   
    
    if(orderId){
        swal.fire({
          title: 'El id de su orden es:',
          text: `${orderId}`,
          icon: 'success',
          showCancelButton: false,
          allowOutsideClick: false,
          confirmButtonText: 'Volver a la tienda',
          confirmButtonClass: styles.btn, 
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/';
          }
        });
    
        return null;
      }

    return (
        <div className={styles.Check}>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>

        </div>
    )              
}

export default Checkout







