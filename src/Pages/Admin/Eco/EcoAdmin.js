import './EcoAdmin.css'
import Head from '../EbookAdmin/Head/Head'
import FooterAdmin from './FooterAdmin/FooterAdmin'
import EditEco from './Ecoponto/Ecoponto'


function EcoAdmin () {
    return(
        <>
        <Head/>
        <div className='d-inline-flex'>
            <FooterAdmin/>
            <EditEco/>
        </div>
        </>
    )
};

export default EcoAdmin