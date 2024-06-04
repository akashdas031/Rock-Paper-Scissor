console.log("Welcome to rock paper scissor...");
let usrScore = 0;
let compScore = 0;
let draw=0;
let mvNumber=10;

let div = document.querySelectorAll(".choose");
let usr = document.querySelector("#usrScore");
let comp = document.querySelector("#compScore");
let drawVal=document.querySelector("#draw");
let msgBoard = document.querySelector("#msg-board");
let msgBx = document.querySelector("#msg");
const showWinner = (userWin, chooseId, compChoice) => {

    if (userWin) {
        usrScore++; 
        msgBx.innerText = ` You Win! your ${chooseId} beats ${compChoice}`;
        msgBx.style.backgroundColor="green";
        usr.innerText = `${usrScore}`;

    } else {
        compScore++;
        msgBx.innerText = `You lose! ${compChoice} beats your ${chooseId}`
        msgBx.style.backgroundColor="red";
        comp.innerText = `${compScore}`

    }
}

const play = (chooseId) => {
    const choice = ["rock", "paper", "scissor"];
    let compChoice = choice[Math.floor(Math.random(0, 3) * 3)];
    if (chooseId === compChoice) {
        msgBx.innerText = "Draw Game! Play again..."
        msgBx.style.backgroundColor="orange"
        draw++;
        drawVal.innerText=`${draw}`
    } else {
        let userWin = true;
        if (chooseId === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (chooseId === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, chooseId, compChoice);
    }
    


}
div.forEach((choose) => {

    choose.addEventListener("click", () => {
        let chooseId = choose.getAttribute("id");
        
        play(chooseId);
    })
})
