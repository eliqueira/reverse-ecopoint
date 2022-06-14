import './Cards.css'
import niobio from '../../../../Assets/img/Nióbio.svg'
import excluir from '../../../../Assets/img/excluir.svg'
import editar from '../../../../Assets/img/editar.svg'

function Cards () {
    return(
        <>
                <div className="imagens">                
                    <img src={niobio} alt='Capa do ebook do Nióbio'/>
                </div>
                    <span className='botao'>
                        <img src={excluir} alt='excluir'/>
                        <img src={editar} alt='editar'/>
                    </span>        
        </>
    )
}

export default Cards