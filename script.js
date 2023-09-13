const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return choices[Math.floor(Math.random()*3)];
}

function playRound(getComputerChoice,getPlayerChoice)
{
    if(getComputerChoice === getPlayerChoice) {
        return "It's a draw";
    }    

    else if(getComputerChoice === "rock" && getPlayerChoice === "paper" || getComputerChoice === "paper" && getPlayerChoice === "scissors" || getComputerChoice === "scissors" && getPlayerChoice === "paper"){
        return "You win";
    }

    else return "Computer Wins";
}

function play()
{
    for(let i=0;i<5;i++)
    {
        let playerChoice = prompt("Enter your choice");
        if(choices.includes(playerChoice))
        {
            let cpChoice = getComputerChoice();
            let result=  playRound(cpChoice,playerChoice.toLowerCase());
            console.log(result);
        }
        else console.log("Invalid input");
        
    }
}

play();