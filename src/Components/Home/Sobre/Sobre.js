import './Sobre.css'
import equipe from "../../../Assets/img/equipe 1.svg"

function Sobre () {
    return(
        <section className='s'>
            <div className='h'>
                    <h1>Sobre</h1> 
               <div className='i'>
                    <img src= {equipe} alt="Equipe responsável"/>
                   <div className='hh'>
                        <h5>Eliel Siqueira</h5>
                       <div className='txt'>
                            <h4>
                                Este site foi criado com o intento de trazer informações aos indivíduos que
                                <br></br>
                                <br></br>
                                querem saber com reutilizar o seu lixo, ou também, como os minérios que
                                <br></br>
                                <br></br>
                                temos dentro de alguns dispositivos e de alguns materiais incomuns que não
                                <br></br>
                                <br></br>            
                                temos, nem idea de como ele é reutilizado funciona e seus processos. 
                            </h4>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    )
};

export default Sobre