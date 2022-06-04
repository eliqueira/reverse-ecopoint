import './Cards.css'
import niobio from '../../../../Assets/img/Nióbio.svg'
import excluir from '../../../../Assets/img/excluir.svg'
import editar from '../../../../Assets/img/editar.svg'

function Cards () {
    return(
        <section>
            <div>
                <img src={niobio} alt='Capa do ebook do Nióbio'>
                    <img src={excluir} alt='excluir'/>
                    <img src={editar} alt='editar'/>

                </img>
                <div>
                </div>
            </div>
        </section>
    )
};

export default Cards