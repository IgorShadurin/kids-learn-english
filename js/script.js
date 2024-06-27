import { generatePhrase, checkAnswer } from './phraseGenerator.js';

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

    recordButton.onmouseup = recordButton.ontouchend = () => {
        setTimeout(() => {
            recognition.stop();
            recordButton.classList.remove('recording');
            recordButton.innerText = 'Record';
        }, 500);
    };

    recognition.onresult = (event) => {
        const userAnswer = event.results[0][0].transcript;
        console.log('Recognized text:', userAnswer);
        document.getElementById('recognized').innerText = userAnswer;
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
    const { phrase, checkPhrase } = generatePhrase();
    currentCheckPhrase = checkPhrase;
    document.getElementById('task').innerText = phrase;
}

window.onload = function() {
    generateNewPhrase();
    setupSpeechRecognition();
};
