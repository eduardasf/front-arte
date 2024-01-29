import ArteList from "../Components/ListArt"
import style from './Listar.module.css'

function Listar(){
    return(
        <div className = {style.listar_container}>
            <h1>Listar/Editar</h1>
            <ArteList/>
        </div>
    )
}

export default Listar