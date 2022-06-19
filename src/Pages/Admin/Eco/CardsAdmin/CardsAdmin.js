import './CardsAdmin.css'
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
                        <Link to='/eco-edit'>                        
                            <img src={editar} alt='editar'/>
                        </Link>
                        <img src={excluir} alt='excluir'/>
                    </span>        
                </div>
        </>
    )
}

export default Cards