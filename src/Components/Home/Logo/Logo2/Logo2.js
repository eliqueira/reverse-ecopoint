import './Logo2.css'
import Insta from '../../../../Assets/img/Insta.svg'
import Phone from '../../../../Assets/img/Phone.svg'
import { Link } from 'react-router-dom'

function Logo2 ()  {
    return( 
        <>
        <div className='social'>
        <img src={Insta} alt='Icon do Instagram'/>
        <img src={Phone} alt='Icon de Telefone'/>
        <Link className='admin' to='login'>
            <div/>               
        </Link> 
        </div>
        </>
    )
};

export default Logo2;