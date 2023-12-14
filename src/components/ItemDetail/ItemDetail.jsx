import styles from '../ItemDetail/itemdetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, image, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
 
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }
        addItem (item, quantity)




    }

    return (
        <article className={styles.CardItem}>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={image} alt={name} className={styles.ItemImg} />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <button className={styles.FinalizarCompra}>
                            <Link to= '/cart' className='Option'>Finalizar Compra</Link>
                        </button>
                    ) : (
                        
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    ) 
                    
                }   
            </footer>
        </article>
    )
}

export default ItemDetail 