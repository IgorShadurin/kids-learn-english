import { nouns, translations } from './words.js';

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePhrase() {
    const likeDislike = getRandomElement(["нравится", "не нравится"]);
    const noun = getRandomElement(nouns);
    const phrase = `мне ${likeDislike} ${noun}`;
    const phraseCapitalized = phrase.charAt(0).toUpperCase() + phrase.slice(1);
    const englishNoun = Object.keys(translations).find(key => translations[key] === noun);
    const checkPhrase = `i ${likeDislike === "нравится" ? "like" : "don't like"} ${englishNoun}`;
    return { phrase: phraseCapitalized, checkPhrase };
}

function checkAnswer(userAnswer, correctAnswer) {
    userAnswer = userAnswer.toLowerCase().trim().replace(/[^a-zA-Z ]/g, '');
    correctAnswer = correctAnswer.toLowerCase().trim().replace(/[^a-zA-Z ]/g, '');

    console.log(`Comparing: "${userAnswer}" with "${correctAnswer}"`);
    return userAnswer === correctAnswer;
}

export { generatePhrase, checkAnswer };
