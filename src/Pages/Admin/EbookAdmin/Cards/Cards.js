import './Cards.css'
import niobio from '../../../../Assets/img/Nióbio.svg'
import excluir from '../../../../Assets/img/excluir.svg'
import editar from '../../../../Assets/img/editar.svg'
import criar from '../../../../Assets/img/criar.svg'
import {Link} from 'react-router-dom'

function Cards () {
    return(
        <>
                <div className="imagens"> 
                <img src={niobio} alt='Capa do ebook do Nióbio'/>
                    <span className='botao'>

                        <Link to='/ebk-create'>
                            <img class='tt' src={criar} alt='criar'/>
                        </Link>

                        <Link to='/ebk-edit'>                        
                            <img src={excluir} alt='editar'/>
                        </Link>
                    </span> 

                    <img src={niobio} alt='Capa do ebook do Nióbio'/>
                    <span className='botao'>
                        ""<Link to='/ebk-edit'>                        
                            <img src={editar} alt='editar'/>
                        </Link>""
                        <img src={excluir} alt='excluir'/>
                    </span>        
                </div>
        </>
    )
}

export default Cards