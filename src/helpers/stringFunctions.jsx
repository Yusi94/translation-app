export const capitalizeWord = string => {
    const capitalizedWord = string[0].toUpperCase() + string.substring(1).toLowerCase();
    return capitalizedWord;
}

export const cleanWord = string => {
    return string.replace(/[-_"“”@#^&*(){}/:><]+/g, '').trim();
}