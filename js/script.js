import {generatePhrase, checkAnswer} from './phraseGenerator.js';

let correctCount = 0;
let currentCheckPhrase = '';

function updateScore() {
    document.getElementById('correct').innerText = correctCount;
}

function setupSpeechRecognition() {
    const recordButton = document.getElementById('recordButton');
    const emoji = document.getElementById('emoji');
    const successSound = document.getElementById('successSound');
    let recognition;
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
    } else {
        alert('Speech recognition not supported in this browser.');
        return;
    }

    recordButton.onmousedown = recordButton.ontouchstart = () => {
        recognition.start();
        emoji.innerText = '';
        document.getElementById('recognized').innerText = '...';
        recordButton.classList.add('recording');
        recordButton.innerText = 'Recording...';
    };

    // recordButton.onmouseup = recordButton.ontouchend = () => {
    //     setTimeout(() => {
    //         recognition.stop();
    //         recordButton.classList.remove('recording');
    //         recordButton.innerText = 'Record';
    //     }, 1000);
    // };

    recognition.onresult = (event) => {
        recordButton.classList.remove('recording');
        recordButton.innerText = 'Record';
        const userAnswer = event.results[0][0].transcript;
        console.log('Recognized text:', userAnswer);
        document.getElementById('recognized').innerText = `${userAnswer} => ${currentCheckPhrase}`;
        if (checkAnswer(userAnswer, currentCheckPhrase)) {
            correctCount++;
            updateScore();
            successSound.play();
            generateNewPhrase();
        } else {
            emoji.innerText = '❌';
        }
    };
}

function generateNewPhrase() {
    const {russianPhrase, englishPhrase} = generatePhrase();
    currentCheckPhrase = englishPhrase;
    document.getElementById('task').innerText = russianPhrase;
    document.getElementById('recognized').innerText = '...';
}

window.onload = function () {
    generateNewPhrase();
    setupSpeechRecognition();
};
