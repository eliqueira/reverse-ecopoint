import "./Inicio.css"
import lixo from '../../../Assets/img/lixo.svg'
import { BsArrowDown } from "react-icons/bs";


function Inicio ()  {
    return (
    <>
        <div className="ini">
            <h1>
                Saiba como se conscientizar
                <br></br>
                <br></br>
                como descartar corretamente os
                <br></br>
                <br></br>
                resíduos sólidos através
                de E-books!!!
                <div>
                    <img className="imagem" src={lixo}/>
                </div>        
            </h1>
            <div className="seta">
                <BsArrowDown/>
            </div>
        </div>
    </>
    )
};

export default Inicio   