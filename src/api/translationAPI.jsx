import { cleanWord } from "../helpers/stringFunctions";

const options = {
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_TM_API_KEY,
      'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
    }
};

export const getTranslatedText = async (fromLang, toLang, textToTranslate) => {
    try {
        const cleanText = cleanWord(textToTranslate);
        const response = await fetch(`https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${fromLang}%7C${toLang}&q=${cleanText}`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}