import styles from '../ItemDetailContainer/itemdetailcontainer.module.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    
    const { itemId } = useParams()

    useEffect (() => {
        getProductsById (itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },  [itemId])


    return(
        <div className={styles.ItemDetailContainer} >
            <ItemDetail {...product} />

        </div>
    )
}



export default ItemDetailContainer

