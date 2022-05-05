import './Logo2.css'
import Insta from '../../../../Assets/img/Insta.svg'
import Phone from '../../../../Assets/img/Phone.svg'

function Logo2 ()  {
    return( 
        <>
        <div className='insta p-4'>
        <img src={Insta} alt='Icon do Instagram'/>
        </div>
        <div className='phone'>
        <img src={Phone} alt='Icon de Telefone'/>        
        </div>
        </>
    )
};

export default Logo2;