import { Link } from 'react-router-dom'
import styles from './BackButton.module.css'


function BackButton({to, text}){
    return(
        <Link className={styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default BackButton