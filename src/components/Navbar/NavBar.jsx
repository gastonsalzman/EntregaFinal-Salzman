import CartWidget from "../CartWidget/CartWidget"
import styles from "./Navbar.module.css"
import logo from "./assets/logo.png"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
            <Link to='/'>
            <img className={styles.logo} src={logo} alt="logo" />
            </Link>    
            </div>
           
            <div className={styles.Categories}>
               <NavLink to={`/category/celular`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Celulares</NavLink>
               <NavLink to={`/category/tablet`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Tablet</NavLink>
               <NavLink to={`/category/auriculares`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Auriculares</NavLink>
               <NavLink to={`/category/mac`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Mac</NavLink>
               <NavLink to={`/formulario`} className={({isActive}) => isActive ? 'activeOption' : 'Option'}>Contacto</NavLink>

            </div>
            <CartWidget /> 
        </nav>
    )

}
export default NavBar