const Letter = require('./letters.js')

class Word {
    constructor(array) {
      this.word = array
    }
    getWord(){
        let temp = "";
        for(let i=0;i< this.word.length;i++){
            temp += `${this.word[i].getLetter()} `
        }
        return temp.toUpperCase().trim()
    }
    checkGuess(char){
        for(let i=0;i< this.word.length;i++){
            this.word[i].checkLetter(char)
        }
        return this.getWord()
    }
}
