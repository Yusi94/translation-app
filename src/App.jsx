import { useState, useRef } from 'react';
import { getTranslatedText } from './api/translationAPI';
import { capitalizeWord, cleanWord } from './helpers/stringFunctions';
import TranslationForm from './components/TranslationForm';
import MatchedTranslations from './components/MatchedTranslations';
import './App.css'

function App() {
  const [translatedText, setTranslatedText] = useState('Translation');
  const [matchingTranslations, setMatchingTranslations] = useState([]);
  
  const textToTranslate = useRef();
  const fromLang = useRef("en");
  const toLang = useRef("tr");

  const getMatchedTranslations = matches => {
    const matchedTranslations = [];

    if(!matches) return;

    matches.forEach(match => {
      matchedTranslations.push(
        {
          id: match.id,
          matchedTranslation: capitalizeWord(cleanWord(match.translation))
        }
      )
    });

    setMatchingTranslations(matchedTranslations.slice(1));
  }

  const handleTranslatedText = e => {
    e.preventDefault();

    getTranslatedText(
      fromLang.current.value, 
      toLang.current.value, 
      textToTranslate.current.value
    ).then(data => {
      let text;

      if(!data.responseData) {
        setTranslatedText("There was an issue translating your input.");
        return;
      }

      if(textToTranslate.current.value !== '') {
        text = capitalizeWord(cleanWord(data.responseData.translatedText));
      } else {
        text = 'Translation';
      }

      setTranslatedText(text);
      getMatchedTranslations(data.matches);
    });
  }

  return (
    <main className="main-content">
      <div className="wrapper flex">
        <TranslationForm ref={{fromLang, toLang, textToTranslate}} onSubmit={handleTranslatedText} />
        <p className="translated-text">{translatedText}</p>
      </div>
      <MatchedTranslations matchingTranslations={matchingTranslations} />
    </main>
  )
}

export default App
