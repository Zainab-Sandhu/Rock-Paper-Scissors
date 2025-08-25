let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userBoard = document.querySelector("#User-Score");
const compBoard = document.querySelector("#Comp-Score");
const reset=document.querySelector("#res-btn");

//Getting Computer-Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIndex = Math.floor(Math.random() * 3);
    return options[ranIndex];
}

//Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {

        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
        userBoard.innerText = ++userscore;
    }
    else {

        msg.innerText = `You Lose.${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
        compBoard.innerText = ++compscore;
    }


}
const drawGame = () => {

    msg.innerText = "It's a draw.Play Again.";
    msg.style.backgroundColor = "#081b31";
}

//Game Logic
const playGame = (userChoice) => {

    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;

        }
        showWinner(userWin, userChoice, compChoice);
    }

}

// Getting User-Choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})
//Reset
reset.addEventListener("click",()=>{
    userscore=0;
    compscore=0;
    userBoard.innerText=0;
    compBoard.innerText=0;
    msg.innerText="Play Your Move";
})

