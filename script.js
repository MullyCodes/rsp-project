let array = [
    'rock',
    'paper',
    'scissors'
];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    
    let value = Math.floor(Math.random() * array.length);
    return value;
}
// console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Rock paper or scissors? ").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){

}