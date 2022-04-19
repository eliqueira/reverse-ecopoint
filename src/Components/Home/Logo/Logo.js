import "./Logo.css"
import logo from "../Assets/img/LOGOTIPO 1.svg"


function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="Logo do Reverse Ecopoint"/>
        </div>
    );
}

export default Logo;