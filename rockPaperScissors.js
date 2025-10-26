const computerChoice = document.getElementById('computerChoice');
const userChoice = document.getElementById('userChoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

function pickUserChoice(text){
    userChoice.textContent = text;
    var rng = getRandomInt(0,2);
    if (rng == 0) {
        computerChoice.textContent = 'rock';
    } else if (rng == 1) {
        computerChoice.textContent = 'paper';
    } else if (rng == 2) {
        computerChoice.textContent = 'scissors';
    }
    if (computerChoice.textContent == userChoice.textContent){
        resultDisplay.textContent = 'a tie...';
    } else if (computerChoice.textContent == 'rock' && userChoice.textContent == 'paper'){
        resultDisplay.textContent = 'you won!!!1!';
    } else if (computerChoice.textContent == 'paper' && userChoice.textContent == 'scissors'){
        resultDisplay.textContent = 'you won!!!1!';
    } else if (computerChoice.textContent == 'scissors' && userChoice.textContent == 'rock'){
        resultDisplay.textContent = 'you won!1!!!';
    } else {
        resultDisplay.textContent = 'lusserr';
    }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}