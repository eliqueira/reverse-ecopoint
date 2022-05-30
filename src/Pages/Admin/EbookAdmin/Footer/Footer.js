import './Footer.css'
import { FaIndustry} from "react-icons/fa";
import { FaArrowLeft} from "react-icons/fa";

function Footer () {
    return(
        <section className='ft'>
            <div className='icon'>
                {FaIndustry}
            </div>
            <div className='icon'>
                {FaArrowLeft}
            </div>
        </section>
    )
};

export default Footer