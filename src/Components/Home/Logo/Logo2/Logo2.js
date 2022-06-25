import './Logo2.css'
import Insta from '../../../../Assets/img/Insta.svg'
import Phone from '../../../../Assets/img/Phone.svg'
import Link from "@material-ui/core/Link"

function Logo2 ()  {
    return( 
        <>
        <div className='um'>
            <Link href='https://www.instagram.com/explore/locations/452209121583774/secretaria-municipal-de-meio-ambiente-agricultura-e-pesca/' className='social'>
                <img  src={Insta} alt='Icon do Instagram'/>
            </Link >

            <Link  className='social' href="https://www.instagram.com/caraguatatuba_oficial/">
                <img src={Phone} alt='Icon de Telefone'/>            
            </Link >
 
        </div>
        </>
    )
};

export default Logo2;