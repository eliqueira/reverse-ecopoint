import ExemploContexto from './Components/UseContext/ExemploContexto';
import LangContext from './Components/UseContext/LangContext';
import ApiIntegrantion from 'Components/Home/ApiIntegrantion';
import { useState } from 'react';

import './App.css';
import Home from './Components/Home/Home';


function App() {
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

  return (
    <div>
      <Home />
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
    </div>
  );
}

export default App
