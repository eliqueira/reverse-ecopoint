import "./Header.css";
import fun from "../Assets/img/Fundo.svg"
import logo from "../Assets/img/LOGOTIPO 1.svg"
import busca from !"../Assets/img/search 1.svg"



function Header() {
    return (
        <div className="header-nav">
            <img src={logo} />
            <img src={busca} />
        </div>
    );
}

export default Header;