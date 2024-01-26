import { Link } from "react-router-dom"

function NavBar(){
    return(
        <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/inserir">Inserir</Link>
      </li>
      <li>
        <Link to="/listar">Listar</Link>
      </li>
    </ul>
    )
}

export default NavBar