import "./Home.css"
import Header from "./Header/Header"
import Inicio from "./Inicio/Inicio"
import Objectiv from "./Objectiv/Objectiv"
import Ecoponto from "../Home/Ecoponto/Ecoponto"
import Ebk from "./Ebk/Ebk"
import Sobre from"./Sobre/Sobre"
import Fim from "./Fim/Fim"

function Home() {
    return (
    <section>
        <Header />
        <Inicio />
        <Objectiv/>
        <Ecoponto />
        <Ebk />
        <Sobre/>
        <Fim/>
    </section>
    );
}
  
export default Home   