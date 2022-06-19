import './EcoAdmin.css'
import Head from '../EbookAdmin/Head/Head'
import CardsAdmin from './CardsAdmin/CardsAdmin'
import FooterAdmin from './FooterAdmin/FooterAdmin'



function EcoAdmin () {
    return(
        <>
        <Head/>
            <FooterAdmin/>
        <div className='d-inline-flex'>
            <CardsAdmin/>        
        </div>
        </>
    )
};

export default EcoAdmin