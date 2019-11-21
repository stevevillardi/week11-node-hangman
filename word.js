const Letter = require('./letters')

class Word {
    constructor(string) {
        this.word =[]
        for(const char of string){
            this.word.push(new Letter(char))
        }
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
    wordGuessed(){
        for(let i = 0 ; i < this.word.length ; i++){
            if(!this.word[i].guessed){
                return false
            }
        }
        return true
    }
}

module.exports = Word