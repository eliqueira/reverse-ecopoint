import "./MainNav.css"
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Logo from "../Logo/Logo"
import Logo2 from "../Logo/Logo2/Logo2"


function MainNav ()  {
    return( 
        <>
        <Nav className="head">
            <Logo/>
            <Nav.Item className="n fs-4">
                <Link className="na" to="/">
                    Sobre
                </Link>
            </Nav.Item>
            <Nav.Item className ="n fs-4">
                <Link className="na" to="ebook">
                    E-books                
                </Link>
            </Nav.Item>
            <Nav.Item className ="n fs-4">
                <Link  className="na" to="ecopoint">
                    Ecopontos                
                </Link>
            </Nav.Item>
            <Logo2/>
        </Nav>      
        </>
    )
};

export default MainNav;