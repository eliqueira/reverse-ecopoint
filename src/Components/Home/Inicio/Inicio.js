import "./Inicio.css"
import lixo from '../../../Assets/img/lixo.svg'

function Inicio ()  {
    return (
    <>
        <div className="ini">
            <h1 className="letra">
                Saiba como se conscientizar
                como descartar corretamente
                os resíduos sólidos através
                de E-books!!!
                <div>
                    <img src={lixo}/>
                </div>        
            </h1>
        </div>
    </>
    )
};

export default Inicio