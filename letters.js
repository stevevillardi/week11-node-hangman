class Letter {
    constructor(letter) {
      this.letter = letter;
      this.guessed = false;
    }
    getLetter(){
        return this.guessed ? this.letter : "_"
    }
    checkLetter(char){
         return char === this.letter ? (this.guessed = true, this.getLetter()) : this.getLetter()
    }
}