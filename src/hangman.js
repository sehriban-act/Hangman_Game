class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('')
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    calculateStatus() {
        const finished = this.word.every((letter) => letter === ' ' || this.guessedLetters.includes(letter))
        if (this.remainingGuesses === 0) {
            this.status = `failed `
        } else if (finished) {
            this.status = 'finished'
        } else {
            this.status = "playing"
        }
    }

    get statusMessage() {
        const wordGuessed = this.word.join('')


        if (this.status === 'finished') {
            return `Well Done `
        }
        if (this.status === "playing") {
            return `BE CAREFUL!!  You Have ${this.remainingGuesses} Remaining Guess `

        } else {
            return `Nice Try!! The word is >>> ${wordGuessed}`
        }
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })

        return puzzle
    }

    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        if (this.status !== "playing") {
            return
        }
        if (isUnique) {
            this.guessedLetters.push(guess)
        }

        if (isUnique && isBadGuess) {
            this.remainingGuesses--
        }

        this.calculateStatus()
    }
}

export {
    Hangman as
    default
}