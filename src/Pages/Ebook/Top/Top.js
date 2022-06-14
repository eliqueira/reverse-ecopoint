import './Top.css'
import  logo from "../../../Assets/img/Logo.svg"
import { Link } from 'react-router-dom'

function Top () {
    return(
        <section className='inicio'>
                    <Link to='/' className='m'>
                    <div>
                        <Link to='/' className='text'>Voltar</Link>
                    </div>
                        <img src={logo} alt='Logo da Reverse Ecopoint'/>                
                    </Link>
        </section>
    )
};

export default Top