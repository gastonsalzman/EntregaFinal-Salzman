import { useState, useEffect } from "react";
import styles from '../ItemListContainer/itemlistcontainer.module.css'
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { Button } from "bootstrap";
import banner1 from '../../assets/banner1.png'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.png'


import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'
import i4 from '../../assets/i4.png'





const ItemListContainer = ({ greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState (true)
    
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
        ? query(collection(db,'productos'), where('category', '==',categoryId))
        : collection (db, 'productos')

        getDocs(collectionRef)
        .then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data }
            })
                setProducts(productsAdapted)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })

    }, [categoryId])

    

    

    return (

        <div>
            <h1>{greeting}</h1>
            <h1>Bienvenidos a ConcorCase</h1>
            

            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={banner1} alt="banner1" className="d-block w-100" />
            </div>
                <div className="carousel-item">
                 <img src={banner2} alt="banner2" className="d-block w-100" />  
            </div>
            <div className="carousel-item">
            <img src={banner3} alt="banner3" className="d-block w-100" />  

            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        
            <div className={styles.separador}>Productos Disponibles:</div>
            <ItemList products={products}/>
           
            <hr />
            <div className={styles.Iconos}>
                <div>
                    <img className={styles.Img} src={i1} alt="" />
                    <h5>Seguridad</h5>
                    <p>Protección de base de datos personales</p>
                </div>
                <div>
                    <img className={styles.Img} src={i2} alt="" />
                    <h5>Garantía</h5>
                    <p>Apple oficial 1 año</p>
                </div>
                <div>
                    <img className={styles.Img} src={i3} alt="" />
                    <h5>Devolución</h5>
                    <p>10 días posteriores a la compra</p>
                </div>
                <div>
                    <img className={styles.Img} src={i4} alt="" />
                    <h5>Servicio</h5>
                    <p>Asesoramiento personalizado</p>
                </div>
            </div>
           

            
        </div>
    )

}



export default ItemListContainer