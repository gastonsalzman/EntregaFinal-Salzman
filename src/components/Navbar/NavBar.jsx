import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import logo from "./assets/logo.png"

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="logo" />
            </div>
           
            <div>
                <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/acerca-de">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
                </ul>
            </div>
            <CartWidget /> 
        </nav>
    )

}
export default NavBar