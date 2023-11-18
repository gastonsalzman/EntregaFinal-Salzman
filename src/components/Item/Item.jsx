import styles from './item.module.css'
import { NavLink, Link } from 'react-router-dom'





const Item = ({id, name,img, price, stock}) => {
    
    return (
        <article className={styles.CardItem}>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className={styles.ItemImg} />
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${price}
                </p>
                <p className='Info'>
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
               <Link to={`/item/${id}`} className='option'>Ver Detalle</Link>
            </footer>
        </article>
    )
}

export default Item