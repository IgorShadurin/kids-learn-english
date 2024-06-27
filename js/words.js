const words = {
    "игрушка": "toy",
    "машина": "car",
    "книга": "book",
    "мультфильм": "cartoon",
    "каша": "porridge",
    "собака": "dog",
    "кошка": "cat",
    "шарик": "ball",
    "конфета": "candy",
    "сок": "juice",
    "мороженое": "ice cream",
    "яблоко": "apple",
    "банан": "banana",
    "шоколад": "chocolate",
    "игра": "game",
    "велосипед": "bicycle",
    "пазл": "puzzle",
    "фрукт": "fruit",
    "овощи": "vegetables",
    "поезд": "train",
    "учитель": "teacher",
    "друг": "friend",
    "класс": "class",
    "урок": "lesson",
    "школа": "school"
};

const pronouns = ["i", "you", "he", "she", "it", "we", "they"];
const actions = [
    "like", "don't like", "want", "don't want", "understand", "don't understand",
    "play with", "talk to", "listen to", "watch"
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export { words, pronouns, actions, getRandomElement };
