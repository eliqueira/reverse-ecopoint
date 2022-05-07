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
             <div className='b p-3'>
                <div className='bb'>
                    <div className='be'>
                        <h4>Nióbio e suas curiosidade</h4>
                        <h5>                        
                            Neste E-book contaremos sobre esse elemento
                            químico que temos a maior
                            <br></br>
                            <br></br>
                            parte dele em nosso país e algumas
                            curiosidades,  como a utilização dele em
                            <br></br>
                            <br></br>
                            sabonete, shampoo, carregador ,etc.
                        </h5>
                        <div className='bi'>
                            <Link className='bo' to="ebook">
                                <h3>Ver</h3>                        
                            </Link>
                        </div>
                    </div>
                    <img src={niobio} alt="niobio"/>
                </div>
            </div>

            <div className='b p-3'>
                <div className='bb'>
                    <div className='be'>
                        <h4>Lixo orgânico e suas reutilidades</h4>
                        <h5>                        
                            Neste E-book contaremos sobre o lixo orgânico
                            que no caso é o resto de
                            <br></br>
                            <br></br>
                            comida,sobras dos vegetais, legumes que você
                            joga em lixo comum, aqui te 
                            <br></br>
                            <br></br>
                            ensinaremos com reutilizar o lixo orgânico.
                        </h5>
                        <div className='bi'>
                        <Link className='bo' to="ebook">
                            <h3>Ver</h3>                        
                        </Link>
                        </div>
                    </div>
                    <img src={comida} alt="niobio"/>
                </div>
            </div>
        </div>
        </>
    )
};

export default Ebk