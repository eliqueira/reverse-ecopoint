import './EbookAdmin.css'
import Head from './Head/Head'
import Footer from './Footer/Footer'
import EditEbook from './Ebooks/Ebooks'

function EbookAdmin () {
    return(
        <>
        <Head/>
        <div className= "d-inline-flex">
            <Footer/>  
            <EditEbook/>    
        </div>
        </>
    )
};

export default EbookAdmin