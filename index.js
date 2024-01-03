let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;



function checkGuess(){
    // Here Number () is used just to make sure the entered value is number.
    const userGuess = Number(guessField.value);

    if(guessField.value === ''){
        alert("PLease Enter A number");
        return;
        
    }

    if (guessCount === 1){
        guesses.textContent = "Previous guesses";
    }

    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratualation! You got it";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if(guessCount === 10){
        lastResult.textContent = "Game Over !!";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else{
        lastResult.textContent = "Wrong !"
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber){
            lowOrHi.textContent = "Last guess was low!";
        }
        else if(userGuess > randomNumber){
            lowOrHi.textContent = "Last guess was high";
        }
    }

    guessCount++;
    guessField.value = "";
    guessField.focus();
}
// addEventListener is a method that takes two argument i.e'click' and checkGuess.
// We don't need to specify paranthesis while writing inside addEventListener.
guessSubmit.addEventListener("click",checkGuess);

function setGameOver(){
    // Look carefully it's disabled not diable. 
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}

function resetGame(){
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetpara of resetParas){
        resetpara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

