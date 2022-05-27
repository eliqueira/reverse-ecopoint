import './Head.css'
import logo from '../../../../Assets/img/Fundo.svg'

function Head() {
    return(
        <section className='img'>
            <img src={logo} alt='Logo do Reverse Ecopoint'/>
        </section>
    )
};

export default Head