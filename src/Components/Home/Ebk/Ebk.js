import './Ebk.css'
import { Link } from 'react-router-dom'
import niobio from "../../../Assets/img/Nióbio.svg"
import comida from "../../../Assets/img/comida.svg"


function Ebk () {
    return(
        <>
        <div className="e">
            <h1>E-BOOKS</h1>
            <Link className='bk' to="ebook">
                <h5>Ver todos</h5>
            </Link>
             <div className='b'>
                <div className='bb'>
                    <h4>Nilóbio e suas curiosidade</h4>
                        <h5>                        
                        Neste E-book contaremos sobre esse elemento
                        químico que temos a maior parte dele em nosso
                        país e algumas curiosidades,  como a utilização
                        dele em sabonete, shampoo, carregador ,etc.
                        </h5>
                    <img src={niobio} alt="niobio"/>
                </div>
            </div>
        </div>
        </>
    )
};

export default Ebk