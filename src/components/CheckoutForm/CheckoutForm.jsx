import { useState } from "react";
import styles from "../CheckoutForm/checkoutform.module.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return(
        <div className={styles.Container}>
            <form onSubmit={handleConfirm} className={styles.Form}>
                <label className={styles.Label}>
                    Nombre:
                    <input 
                        className={styles.Input} 
                        type="text" 
                        value={name}
                        onChange={({ target }) => setName (target.value)}
                    />
                </label>
                <label className="Label">
                    Telefono:
                    <input
                        className={styles.Input} 
                        type="text" 
                        pattern="[0-9]*"
                        value={phone}
                        onChange={({ target }) =>setPhone(target.value)}
                    />
                </label>
                <label className="Label">
                    Email:
                    <input
                        className={styles.Input} 
                        type="email" 
                        value={email}
                        onChange={({ target }) =>setEmail(target.value)}
                    />
                </label>
                <div className="Label">
                    <button type="submit" className="buttton"> Crear Orden</button>
                </div>
            </form>
        </div>
    )
}
export default CheckoutForm