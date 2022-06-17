import './Cards.css'
import niobio from '../../../../Assets/img/Nióbio.svg'
import excluir from '../../../../Assets/img/excluir.svg'
import editar from '../../../../Assets/img/editar.svg'
import {Link} from 'react-router-dom'

function Cards () {
    return(
        <>
                <div className="imagens">                
                    <img src={niobio} alt='Capa do ebook do Nióbio'/>
                    <span className='botao'>
                        <img src={excluir} alt='excluir'/>
                        <Link to='/edit'>                        
                            <img src={editar} alt='editar'/>
                        </Link>
                    </span>        
                </div>
        </>
    )
}

export default Cards