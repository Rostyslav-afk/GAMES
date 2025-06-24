const stoneButton = document.querySelector('[src="./img/stone.webp"]');
const scissorsButton = document.querySelector('[src="./img/scissors.webp"]');
const paperButton = document.querySelector('[src="./img/paper.webp"]');
const resultText = document.querySelector(".rsp__result");

const choices = ["stone", "scissors", "paper"];


let playerScore = 0;
let aiScore = 0;
let playerChoice = "";
let aiChoice = "";

stoneButton.addEventListener("click", (event) => {
    playerChoice = choices[0];
    getAIChoice();
    checkWinner();
});


scissorsButton.addEventListener("click", (event) => {
    playerChoice = choices[1];
    getAIChoice();
    checkWinner();
});

paperButton.addEventListener("click", (event) => {
    playerChoice = choices[2];
    getAIChoice();
    checkWinner();
});

function getAIChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const choice = choices[randomIndex];
    return aiChoice = choice;
}

function checkWinner() {
    if (playerChoice === aiChoice) {
        console.log("Нічия");
    } else if (
        (playerChoice === "stone" && aiChoice === "scissors") ||
        (playerChoice === "scissors" && aiChoice === "paper") ||
        (playerChoice === "paper" && aiChoice === "stone")
    ) {
        playerScore += 1;
        console.log("Ви виграли раунд!");
    } else {
        aiScore += 1;
        console.log("Комп’ютер виграв раунд!");
        resultText.textContent = "Комп’ютер виграв раунд!";
        resultText.style.color = "red";
    }
};

