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
    "овощи": "vegetable",
    "поезд": "train"
};

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export { words, getRandomElement };
