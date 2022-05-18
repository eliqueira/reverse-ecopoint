import './Cards.css'
import niobio from '../../../Assets/img/Nióbio.svg'
// import { Card, CardGroup } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'

function Cards() {
    return(
        <>
        <container className='d-flex justify-content-center'>
            <div className='cardin'>
                    <img src={niobio} alt='niobio imagem'/>
                    <h1>Eliel</h1>
                    <br/>
                    <h3>
                        Quem ler esse post terá que ler o E-book
                        obrigado, valeu leitor!! :!
                    </h3>
                    <button className='bots'>
                        Ler
                    </button>
            </div>

            <div className='cardin'>
                <img src={niobio} alt='niobio imagem'/>
                <h1>Eliel</h1>
                <br/>
                <h3>
                    Quem ler esse post terá que ler o E-book
                    obrigado, valeu leitor!! :!                
                </h3>
                <button className='bots'>
                    Ler
                </button>
            </div>

            <div className='cardin'>
                <img src={niobio} alt='niobio imagem'/>
                <h1>Eliel</h1>
                <br/>
                <h3>
                    Quem ler esse post terá que ler o E-book
                    obrigado, valeu leitor!! :!                
                </h3>
                <button className='bots'>
                    Ler
                </button>
            </div>

            
        </container>
        </>
    )
};

export default Cards