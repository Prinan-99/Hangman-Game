const words = ["python", "hangman", "challenge", "programming", "development"];
let chosenWord = words[Math.floor(Math.random() * words.length)];
let guessedLetters = new Set();
let attempts = 6;

function displayWord() {
    const wordContainer = document.getElementById('word');
    wordContainer.innerHTML = chosenWord
        .split('')
        .map(letter => (guessedLetters.has(letter) ? letter : "_"))
        .join(' ');
}

function updateAttempts() {
    document.getElementById('attempts-count').innerText = attempts;
}

function showMessage(msg) {
    document.getElementById('message').innerText = msg;
}

function updateGuessedLetters() {
    document.getElementById('guessed-letters').innerText = `Guessed Letters: ${Array.from(guessedLetters).join(', ')}`;
}

document.getElementById('guess-button').onclick = () => {
    const guessInput = document.getElementById('guess-input');
    const guess = guessInput.value.toLowerCase();

    if (guessedLetters.has(guess)) {
        showMessage("You already guessed that letter.");
    } else if (chosenWord.includes(guess)) {
        guessedLetters.add(guess);
        showMessage("Good guess!");
    } else {
        guessedLetters.add(guess);
        attempts--;
        showMessage("Incorrect guess.");
    }

    displayWord();
    updateAttempts();
    updateGuessedLetters();

    if (attempts === 0) {
        showMessage(`Sorry, you've run out of attempts. The word was: ${chosenWord}`);
    } else if (chosenWord.split('').every(letter => guessedLetters.has(letter))) {
        showMessage(`Congratulations! You've guessed the word: ${chosenWord}`);
    }

    guessInput.value = '';
};

displayWord();
updateAttempts();
