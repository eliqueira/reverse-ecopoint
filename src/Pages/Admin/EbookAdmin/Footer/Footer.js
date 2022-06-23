import './Footer.css'
import {FaIndustry, FaArrowLeft} from "react-icons/fa";
import {Link} from 'react-router-dom'


function Footer () {
    return(
        <section className='ft'>
                <Link className='icon' to="/eco-admin">
                    <FaIndustry/>                
                </Link>
                <Link className='icon' to="login">
                    <FaArrowLeft/>                                
                </Link>
        </section>
    )
};

export default Footer