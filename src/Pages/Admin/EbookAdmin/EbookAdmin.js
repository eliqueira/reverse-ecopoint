import './EbookAdmin.css'
import Head from './Head/Head'
import { useAllowedRole } from '../../../Components/Providers/authProviders';
import Footer from './Footer/Footer'

function EbookAdmin () {

    useAllowedRole('admin', '/admin/login')

    return(
        <>
        <Head/>
        <Footer/>        
        </>
    )
};

export default EbookAdmin