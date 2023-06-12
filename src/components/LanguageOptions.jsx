import React from 'react';
import { languages } from '../data/languageCodes';
import styles from './LanguageOptions.module.css';

const LanguageOptions = React.forwardRef(({ htmlFor, name }, ref) => {
    return (
        <label htmlFor={htmlFor}>
            <select 
                ref={ref} name={name} 
                id={htmlFor} 
                defaultValue={ref.current} 
                className={styles.languageOptions}>
                {languages.map(language => <option key={language.code} value={language.code}>{language.name}</option>)}
            </select>
        </label>
    );
})

export default LanguageOptions;