import { Link } from "react-router-dom"
import Container from './Container'
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <nav className={styles.navbar}>
          <p className = {styles.logo}>Vitual Museum</p>
          <Container>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.item}> 
                <Link to="/inserir">Inserir</Link>
              </li>
              <li className={styles.item}>
              <Link to="/listar">Listar</Link>
              </li>
            </ul>
          </Container>
        </nav>
    )
}

export default NavBar