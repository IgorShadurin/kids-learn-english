let correctCount = 0;
const phrases = [
    { ru: "Привет", en: "Hello" },
    { ru: "Спасибо", en: "Thank you" },
    { ru: "Как дела?", en: "How are you?" },
    { ru: "До свидания", en: "Goodbye" }
];
let currentPhraseIndex = 0;

function getNextPhrase() {
    currentPhraseIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById('task').innerText = phrases[currentPhraseIndex].ru;
}

function updateScore() {
    document.getElementById('correct').innerText = correctCount;
}

function checkAnswer(userAnswer) {
    const correctAnswer = phrases[currentPhraseIndex].en.toLowerCase().trim().replace(/[^a-zA-Z ]/g, '');
    userAnswer = userAnswer.toLowerCase().trim().replace(/[^a-zA-Z ]/g, '');
    return userAnswer === correctAnswer;
}

window.onload = function() {
    getNextPhrase();

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
        if (checkAnswer(userAnswer)) {
            correctCount++;
            updateScore();
            successSound.play();
            getNextPhrase();
        } else {
            emoji.innerText = '❌';
        }
    };
};

// For testing purposes
window.checkAnswer = checkAnswer;
