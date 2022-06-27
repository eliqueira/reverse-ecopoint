import { Link } from "react-router-dom";
import './Buton.css'

function Buton () {
    return(
    <Link className='ol' to={'/eco-create'}> <button>Criar Ecoponto</button></Link>
    )    
};

export default Buton
