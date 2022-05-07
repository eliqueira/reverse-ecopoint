import './Logo2.css'
import Insta from '../../../../Assets/img/Insta.svg'
import Phone from '../../../../Assets/img/Phone.svg'

function Logo2 ()  {
    return( 
        <>
        <div className='social'>
        <img src={Insta} alt='Icon do Instagram'/>
        <img src={Phone} alt='Icon de Telefone'/>        
        </div>
        </>
    )
};

export default Logo2;