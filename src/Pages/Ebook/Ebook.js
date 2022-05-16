import "./Ebook.css";
import Let from "./Let/Let";
import Top from "./Top/Top";
import Cards from "./Cards/Cards";


function Ebook() {
    return (
        <section className="e">        
        <Top/>
        <Let/>
        <Cards/>
        </section>
    );
}
export default Ebook