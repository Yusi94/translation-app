import styles from './MatchedTranslations.module.css';

const MatchedTranslations = ({ matchingTranslations }) => {
    const toggleDisplay = {
        display: matchingTranslations.length ? 'block' : 'none'
    }

    return (
        <>
            <div className={styles.matchedTranslationsWrapper} style={toggleDisplay}>
                <h2>Similar Translations</h2>
                <ul>
                {
                    matchingTranslations.map(translations => <li key={translations.id}>{translations.matchedTranslation}</li>) 
                }
                </ul>
            </div>
        </>
    );
}

export default MatchedTranslations;