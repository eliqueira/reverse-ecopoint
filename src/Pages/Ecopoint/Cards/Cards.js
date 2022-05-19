import './Cards.css'
import martin from '../../../Assets/img/martin.svg'
// import { Card, CardGroup } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'

function Cards() {
    return(
        <>
        <container className='d-flex justify-content-center'>
            <div className='cardin'>
                    <img src={martin} alt='martin imagem'/>
                    <h1>Eliel</h1>
                    <br/>
                    <h3>
                        Quem ler esse post terá que ler o E-book
                        obrigado, valeu leitor!! :!
                    </h3>
                    <button className='bots'>
                        Localizar
                    </button>
            </div>

            <div className='cardin'>
                <img src={martin} alt='martin imagem'/>
                <h1>Eliel</h1>
                <br/>
                <h3>
                    Quem ler esse post terá que ler o E-book
                    obrigado, valeu leitor!! :!                
                </h3>
                <button className='bots'>
                    Localizar
                </button>
            </div>

            <div className='cardin'>
                <img src={martin} alt='martin imagem'/>
                <h1>Eliel</h1>
                <br/>
                <h3>
                    Quem ler esse post terá que ler o E-book
                    obrigado, valeu leitor!! :!                
                </h3>
                <button className='bots'>
                    Localizar
                </button>
            </div>

            
        </container>
        </>
    )
};

export default Cards