import './EbookAdmin.css'
import Head from './Head/Head'
import Footer from './Footer/Footer'
import Cards from './Cards/Cards'

function EbookAdmin () {
    return(
        <>
        <Head/>
            <Footer/>  
        <div class= "d-inline-flex">
            <Cards/>    
        </div>
        </>
    )
};

export default EbookAdmin