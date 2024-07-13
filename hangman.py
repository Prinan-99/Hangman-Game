import random

words = ["python", "hangman", "challenge", "programming", "development"]

def choose_word():
    """Selects a random word from the list of words."""
    return random.choice(words)

def display_word(word, guessed_letters):
    """Displays the word with guessed letters and underscores for remaining letters."""
    displayed_word = ""
    for letter in word:
        if letter in guessed_letters:
            displayed_word += letter
        else:
            displayed_word += "_"
    return displayed_word

def hangman():
    word = choose_word()
    guessed_letters = set()
    attempts = 6  # Number of allowed incorrect attempts

    print("Welcome to Hangman!")
    print("Guess the word, one letter at a time.")

    while attempts > 0:
        print("\n" + display_word(word, guessed_letters))
        print(f"Attempts remaining: {attempts}")

        guess = input("Guess a letter: ").lower()

        if guess in guessed_letters:
            print("You already guessed that letter. Try again.")
        elif guess in word:
            guessed_letters.add(guess)
            print("Good guess!")
            if all(letter in guessed_letters for letter in word):
                print("\n" + word)
                print("Congratulations! You've guessed the word correctly!")
                break
        else:
            guessed_letters.add(guess)
            attempts -= 1
            print("Incorrect guess.")

    if attempts == 0:
        print("\nSorry, you've run out of attempts. The word was:", word)

if __name__ == "__main__":
    hangman()
