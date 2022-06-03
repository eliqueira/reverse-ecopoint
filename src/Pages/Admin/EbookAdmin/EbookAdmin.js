import './EbookAdmin.css'
import Head from './Head/Head'
import { useAllowedRole } from '../../../Components/Providers/authProviders';

const EbookAdmin = () => {

    useAllowedRole('admin', '/admin/login')

    return(
        <Head/>
    )
};

export default EbookAdmin