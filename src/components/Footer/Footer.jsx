import React from 'react'
import styles from '../Footer/footer.module.css';
import images from './images';

export default function Footer() {
  return (
    <div className={styles.Footer}>
        <div className={styles.Metodo}>
            <p>Metodos de Pago:</p>
            <hr />
            <img src={images.mastercard} alt="" />
            <img src={images.maestro} alt="" />
            <img src={images.visa} alt="" />
            <img src={images.mercadopago} alt="" />
            <img src={images.pagofacil} alt="" />
            <img src={images.rapipago} alt="" />
            <hr />
            <p>ConcorCase marca registrada. Todos los derechos reservados.</p>
        </div>
        
    </div>
  )
}
