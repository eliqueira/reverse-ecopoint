import './Top.css'
import  logo from "../../../Assets/img/Logo.svg"
import { Link } from 'react-router-dom'

function Top () {
    return(
        <section className='i'>
            <div>
                <Link to='/' className='m'>
                <img src={logo} alt='Logo da Reverse Ecopoint'/>                
                </Link>
            </div>
        </section>
    )
};

export default Top