import styles from './Home.module.css'
import imagem from '../img/img-home.jpg'
import { Link } from 'react-router-dom'
import LinkButton from '../Components/layout/LinkButton'

function Home(){
    return(
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Virtual Museum</span></h1>
            <p>Comece a inserir obras de artes agora mesmo!</p>
            <LinkButton to = "/Inserir" text = "Inserir Obra" />
            <img src={imagem} alt="Desenho"/>
        </section>
    )
}

export default Home