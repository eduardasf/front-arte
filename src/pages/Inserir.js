import style from './Inserir.module.css'
import ArteForm from '../Components/SaveArt'

function Inserir(){
    return(
        <div className = {style.inserir_container}>
            <h1>Inserira a Obra</h1>      
            <ArteForm/>
        </div>
    )
}

export default Inserir