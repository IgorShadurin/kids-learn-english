import { templates } from './templates.js';

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generates a phrase in Russian and its corresponding English check phrase.
 * @returns {Object} An object containing the generated Russian phrase and the corresponding English check phrase.
 */
function generatePhrase() {
    const templateKeys = Object.keys(templates);
    const selectedTemplateKey = getRandomElement(templateKeys);
    const selectedTemplate = getRandomElement(templates[selectedTemplateKey]);

    const englishPlaceholders = selectedTemplateKey.match(/{[^}]+}/g);
    const russianPlaceholders = selectedTemplate.match(/{[^}]+}/g);

    let russianPhrase = selectedTemplate;
    let englishPhrase = selectedTemplateKey;

    englishPlaceholders.forEach((placeholder, index) => {
        const englishOptions = placeholder.replace(/[{}]/g, '').split('|');
        const selectedEnglishOption = getRandomElement(englishOptions);

        const russianOptions = russianPlaceholders[index].replace(/[{}]/g, '').split('|');
        const selectedRussianOption = russianOptions[englishOptions.indexOf(selectedEnglishOption)];

        russianPhrase = russianPhrase.replace(russianPlaceholders[index], selectedRussianOption);
        englishPhrase = englishPhrase.replace(placeholder, selectedEnglishOption);
    });

    return { russianPhrase, englishPhrase };
}

/**
 * Checks if the user's answer matches the correct answer.
 * @param {string} userAnswer - The user's answer.
 * @param {string} correctAnswer - The correct answer.
 * @returns {boolean} True if the user's answer matches the correct answer, false otherwise.
 */
function checkAnswer(userAnswer, correctAnswer) {
    userAnswer = userAnswer.toLowerCase().trim().replace(/[^a-zA-Z ]/g, '');
    correctAnswer = correctAnswer.toLowerCase().trim().replace(/[^a-zA-Z ]/g, '');

    console.log(`Comparing: "${userAnswer}" with "${correctAnswer}"`);
    return userAnswer === correctAnswer;
}

export { generatePhrase, checkAnswer };
