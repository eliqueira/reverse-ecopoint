import './FooterAdmin.css'
import {FaFile, FaArrowLeft} from "react-icons/fa";
import {Link} from 'react-router-dom'


function FooterAdmin () {
    return(
        <section className='ft'>
                <Link className='icon' to="/admin">
                    <FaFile/>                
                </Link>
                <Link className='icon' to="login">
                    <FaArrowLeft/>                                
                </Link>
        </section>
    )
};

export default FooterAdmin