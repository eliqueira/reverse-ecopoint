import './Sobre.css'
import equipe from "../../../Assets/img/equipe 1.svg"
import Card from 'react-bootstrap/Card'

function Sobre () {
    return(
        <section className='s' id='sobre'>
            <div className='h'>
                    <h1>Sobre</h1> 
               <div className='i'>
                    <img src= {equipe} alt="Equipe responsável"/>
                   <div className='hh'>
                        <h5>Eliel Siqueira</h5>
                       <div className='txt'>
                            <Card className='card' border="---" style={{ width: '850px'}}>
                                <Card.Body>
                                <Card.Text>
                                    <h4>
                                        Este site foi criado com o intento de trazer informações aos indivíduos que
                                        <br />
                                        <br></br>
                                        querem saber com reutilizar o seu lixo, ou também, como os minérios que
                                        <br></br>
                                        <br></br>
                                        temos dentro de alguns dispositivos e de alguns materiais incomuns que não
                                        <br></br>
                                        <br></br>            
                                        temos, nem idea de como ele é reutilizado funciona e seus processos. 
                                    </h4>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                       </div>
                   </div>
               </div>
            </div>
        </section>
    )
};

export default Sobre