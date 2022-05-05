import "./Inicio.css"
import lixo from '../../../Assets/img/lixo.svg'

function Inicio ()  {
    return (
    <>
        <div className="ini">
            <h1>
                Saiba como se conscientizar
                como descartar corretamente
                os resíduos sólidos através
                de E-books!!!
                <div className="p-5 d-flex mt-3">
                    <img className="mt-3" src={lixo}/>
                </div>        
            </h1>
        </div>
    </>
    )
};

export default Inicio   