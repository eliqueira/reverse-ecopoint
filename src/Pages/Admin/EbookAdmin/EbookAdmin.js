import './EbookAdmin.css'
import Head from './Head/Head'
import Footer from './Footer/Footer'
import Cards from './Cards/Cards'

function EbookAdmin () {
    return(
        <>
        <Head/>
        <div class= "d-inline-flex">
            <Footer/>  
            <Cards/>    
        </div>
        </>
    )
};

export default EbookAdmin