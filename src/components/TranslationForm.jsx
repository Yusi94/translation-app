import React from 'react';
import LanguageOptions from './LanguageOptions';
import styles from './TranslationForm.module.css';

const TranslationForm = React.forwardRef((
    { onSubmit }, 
    { fromLang, toLang, textToTranslate }) => {
    return (
        <form onSubmit={onSubmit} className="grid">
            <div className="flex">
                <LanguageOptions ref={fromLang} htmlFor="source-language" name="source-language" />
                <LanguageOptions ref={toLang} htmlFor="target-language" name="target-language" />
            </div>
            <textarea ref={textToTranslate} className={styles.textToTranslate} placeholder="Enter Text"></textarea>
            <button type="submit" className={styles.submitBtn}>Submit</button>
        </form>
    );
})

export default TranslationForm;