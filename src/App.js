import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './Pages/NotFound'
import Ebook from './Pages/Ebook/Ebook';
import EditUserOnChange from './Components/Home/EditUserOnChange'
import ApiIntegrantion from './Components/Home/ApiIntegrantion'
import Eco from './Pages/Ecopoint/Ecopoint';
import FormEbook from './Components/Home/FormEbook';
import EbookAdmin from './Pages/Admin/EbookAdmin/EbookAdmin'
import Login from './Pages/Admin/Login/Login';

function App() {
  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="ebook" element={<Ebook/>} />
        <Route path="ecopoint">
          <Route index element={<Eco/>}/>
        </Route>
        <Route path="form" element={<FormEbook/>} />
        <Route path="api-integration" >
            <Route index element={<ApiIntegrantion />}/>
            <Route path="edit/:ebookId" element={<EditUserOnChange />} />
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="admin" element={<EbookAdmin/>}/>
        <Route path="*" element={<NotFound />}/>
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