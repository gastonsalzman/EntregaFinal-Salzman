import styles from '../ItemDetailContainer/itemdetailcontainer.module.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/client';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState (true)
    
    const { itemId } = useParams()
    useEffect(() => {
        setLoading(true) 

        const docRef = doc(db, 'productos', itemId)

        getDoc(docRef)
            .then(response => {
            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            setProduct(productAdapted)

            })
            .catch (error => {
            console.log(error)
            })
            .finally(() => {
            setLoading(false)
            })
    }, [itemId])

    return(
        <div className={styles.ItemDetailContainer} >
            <ItemDetail {...product} />

        </div>
    )
}



export default ItemDetailContainer

