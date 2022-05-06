import './Ecoponto.css'
import massagua from "../../../Assets/img/massagua 1.svg"
import golfinho from "../../../Assets/img/golfinho 1.svg"
import martin from "../../../Assets/img/martin 1.svg"
import { Link } from 'react-router-dom'

function Ecoponto () {
    return(
        <div className="eco">
            <h1>ECOPONTOS</h1>
            <Link className='point' to="ecopoint">
                <h5>Ver todos</h5>
            </Link>
            <div className='image'>
                <div className='ec'>
                    <img src={massagua} alt="Ecoponto do Massaguaçu"/>
                    <h5>Ecoponto do Massaguaçu</h5>
                </div>
                <div className='ec'>
                    <img src={martin} alt="Ecoponto da Martin de Sá"/>
                    <h5>Ecoponto do Massaguaçu</h5>
                </div>
                <div className='ec'>
                    <img src={golfinho} alt="Ecoponto do Golfinho"/>
                    <h5>Ecoponto do Massaguaçu</h5>
                </div>
            </div>
        </div>
    )
};

export default Ecoponto