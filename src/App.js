import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Pages/NotFound'
import Ebook from './Pages/Ebook/Ebook';
import Eco from './Pages/Ecopoint/Ecopoint';
// import Login from './Pages/Admin/Login/Login';
// import Providers from './Components/Providers/AuthProviders'
import EbookAdmin from './Pages/Admin/EbookAdmin/EbookAdmin'
import EbookCadastro from './Pages/Admin/EbookAdmin/EbookCadastro/EbookCadastro'
import Ebooks from './Pages/Admin/EbookAdmin/Ebooks/Ebooks'
import EditEbook from './Pages/Admin/EbookAdmin/Edit/EditEbook';
import EcoAdmin from './Pages/Admin/Eco/EcoAdmin'
import FormEco from './Pages/Admin/Eco/EcoCadastro/FormEco';
import EcoCadastro from './Pages/Admin/Eco/EcoCadastro/EcoCadastro';
import Ecoponto from './Pages/Admin/Eco/Ecoponto/Ecoponto';
import EditEco from './Pages/Admin/Eco/EditEco/EditEco'


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="ebook" element={<Ebook/>} />
          <Route path='eco' element={<Eco/>}/>
            {/* <Route path='login' element={<Login />} /> */}

                            {/* Ebook */}

            <Route path='/admin' element={<EbookAdmin />}/>
            <Route path='ebk-create' element={<EbookCadastro/>}/>
            <Route path="ebk-edit" >
                <Route index element={<Ebooks />}/>
                <Route path="edit/:ebookId" element={<EditEbook />} />
            </Route>

                            {/* Ecoponto */}

            <Route path='eco-admin' element={<EcoAdmin/>}/>
            <Route path='eco-create' element={<EcoCadastro/>}/>
            <Route path="forms" element={<FormEco/>} />
            <Route path="eco-edit" >
                <Route index element={<Ecoponto />}/>
                <Route path="edit/:ecopontoId" element={<EditEco />} />
            </Route>
            <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App

// <LangContext.Provider value={[
//   currentLang === 'br' 
//   ? lang.br 
//   : lang.en,
//   toggleLanguage,
//   setCurrentLanguage
// ]}>

//   const lang = {
  //     br: {
    //       welcome: 'Bem-Vindo',
//       changeLanguage: 'Alterar Idioma',
//       portuguese: 'Português',
//       english: 'Inglês',
//       textIntroduction: ''
//     },
//     en: {
//       welcome: 'Welcome',
//       changeLanguage: 'Change Language',
//       portuguese: 'Portuguese',
//       english: 'English'
//     }
//   }

//  const currentLangState = useState('br');
//  const [currentLang, setCurrentLanguage] = currentLangState;

//  const toggleLanguage = () => {
//   const newLanguage = currentLang === 'br' ? 'en' : 'br'
//   setCurrentLanguage(newLanguage)
//  }
      //  <LangContext.Provider value={[
      //     currentLang === 'br' 
      //     ? lang.br 
      //     : lang.en,
      //     toggleLanguage,
      //     setCurrentLanguage
      //   ]}>
      //   <div className="App">
      //     <ExemploContexto/>
      //   </div>
      // </LangContext.Provider> 
      // <ApiIntegrantion /> 