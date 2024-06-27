import { words, getRandomElement } from './words.js';

function generatePhrase() {
    const likeDislike = getRandomElement(["нравится", "не нравится"]);
    const noun = getRandomElement(Object.keys(words));
    const phrase = `мне ${likeDislike} ${noun}`;
    const phraseCapitalized = phrase.charAt(0).toUpperCase() + phrase.slice(1);
    const englishNoun = words[noun];
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
