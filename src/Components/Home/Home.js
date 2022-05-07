import "./Home.css"
import Header from "./Header/Header"
import Inicio from "./Inicio/Inicio"
import Objectiv from "./Objectiv/Objectiv"
import Ecoponto from "../Home/Ecoponto/Ecoponto"
import Ebk from "./Ebk/Ebk"
import Sobre from"./Sobre/Sobre"

function Home() {
    return (
    <>
    <Header />
    <Inicio />
    <Objectiv/>
    <Ecoponto />
    <Ebk />
    <Sobre/>
    </>
    );
}
  
export default Home   