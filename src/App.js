import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route} from "react-router-dom";
import Logo from 'Components/Home/Logo/Logo';
import Nav from 'Components/Home/NavBar/Nav';
import FormUser from 'Components/Home/FormUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    // <LangContext.Provider value={[
    //   currentLang === 'br' 
    //   ? lang.br 
    //   : lang.en,
    //   toggleLanguage,
    //   setCurrentLanguage
    // ]}>
    <div className="App">
      <h1>Welcome to React Router!</h1>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="logo" element={<Logo/>} />
        <Route path="nav" element={<Nav/>} />
        <Route path="form" element={<FormUser/>} />
    </Routes>
    </div>
  );
}

export default App


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
      {/* <LangContext.Provider value={[
          currentLang === 'br' 
          ? lang.br 
          : lang.en,
          toggleLanguage,
          setCurrentLanguage
        ]}>
        <div className="App">
          <ExemploContexto/>
        </div>
      </LangContext.Provider> */}
      {/* <ApiIntegrantion /> */}