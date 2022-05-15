import Cards from "./Cards/Cards";
import "./Ebook.css";
import Let from "./Let/Let";
import Top from "./Top/Top";


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