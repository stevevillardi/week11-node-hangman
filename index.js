const Word = require('./word');
const randomWords = require('random-words');
const inquirer = require('inquirer');
const chalk = require('chalk')

function chooseWord(){
    const randomWord = randomWords({ exactly: 1, min: 5, max: 10 }).toString();
    console.log(`Selected Word: ${randomWord}`);
    return new Word(randomWord)
}

function promptUser(){
    let prompt = [
        {
            type: "input",
            name: "guess",
            message: "Pick a letter to make a guess:"
        }
    ];

    inquirer.prompt(prompt).then(answer => {
        console.log(chalk.white.bgYellow.bold(selectedWord.checkGuess(answer.guess)))
        if(!selectedWord.wordGuessed()){
            promptUser()
        }
        else{
            console.log(chalk.green.bold("You win!"))
            selectedWord = chooseWord()
            console.log(chalk.white.bgYellow.bold(selectedWord.getWord()))
            promptUser()
        }
    });
}
let selectedWord = chooseWord()
console.log(chalk.white.bgYellow.bold(selectedWord.getWord()))
promptUser()