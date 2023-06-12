import React, { useState } from 'react';

const TranslationContext = React.createContext();

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider = ({ children }) => {
    const [matchingTranslations, setMatchingTranslations] = useState([]);
    
    return (
        <TranslationContext.Provider value={}>
            {children}
        </TranslationContext.Provider>
    )
}