import "./Logo.css"
import logo from '../../../Assets/img/logotipo.svg'
import { BiSearchAlt } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";


function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo do Reverse Ecopoint" style={{width:"13rem"}}/>
            <BiSearchAlt className="busca"/>
            <IoIosMenu className="menu"/>
        </div>
    );
}

export default Logo;