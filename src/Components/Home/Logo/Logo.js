import "./Logo.css"
import logo from '../../../Assets/img/Logo.svg'
// import { BiSearchAlt } from "react-icons/bi"
// import { IoIosMenu } from "react-icons/io"

function Logo ()  {
    return (
        <div className="logo">
            <img src={logo} alt="Logo do Reverse Ecopoint"/>
        </div>
    );
}

export default Logo;