import "./Header.css";
import Logo from "../Logo/Logo";
import Nav from "../NavBar/MainNav";


function Header() {
    return (
        <div className="header-nav">
            <Logo />
            <Nav />
        </div>
    );
}
export default Header;