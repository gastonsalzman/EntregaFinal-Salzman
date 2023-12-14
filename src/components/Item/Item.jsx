
import { useNavigate } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ id, name, image, price, stock }) => {

    
    const navigate = useNavigate();  
  
    const handleClick = () => {
    navigate(`/item/${id}`);
    };

  return (
    <article className={styles.CardItem}>
      <header className={styles.Header}>
        <h2 className={styles.ItemHeader}>{name}</h2>
      </header>
      <picture>
        <img src={image} alt={name} className={styles.ItemImg} />
      </picture>
      <section>
        <p className={styles.Info}>Precio: ${price}</p>
        <p className={styles.Info}>Stock Disponible: {stock}</p>
        <p className={styles.Info3}>Abonando con tarjeta Visa y Master bancarias 12 cuotas fijas. </p>
      </section>
      <footer className={styles.ItemFooter}>
        <button className={styles.Option} onClick={handleClick}>Ver Más Información</button>
      </footer>
    </article>
  );
};

export default Item;