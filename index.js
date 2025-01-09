let humanScore = 0;
let computerScore = 0;

let value = parseInt(prompt("How many rounds do you want to play? "));
totalGames(value);
console.log(value);
function getComputerChoic(){
    const randomGuess = Math.floor(Math.random() * 3) + 1;
    let guess = '';
    if (randomGuess === 1){
       guess = "rock";
    }else if(randomGuess === 2){
        guess = "paper";
    }else if (randomGuess === 3){
        guess = "scissors";
    }
  //  console.log("computer: " + guess);
    return guess;
}
function getHumanChoice(){
    guess = prompt("Rock Paper Scissors?");
    return guess.toLowerCase();
}

function playRound(humanChoice,computerChoice){
    console.log(humanChoice, computerChoice);
    if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("Human won!")
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log("Computer won!")
    }

    //
    if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human won!")
        humanScore++;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log("Computer won!")
    }

    //
    if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human won!")
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log("Computer won!")
    }
    
}
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoic();

    playRound(humanSelection, computerSelection)

}


console.log("\n ------------------------------------")
function checkWinner(pointsHuman, pointsComputer){
    if (pointsHuman > pointsComputer){
        console.log("Human won the game!")
    }else if(pointsComputer > pointsHuman){
        console.log("Computer won the game!")
    }else{
        console.log("No winners!")
    }

    console.log("Final Score after "+ value + " rounds")
    console.log("Human: "+pointsHuman);
    console.log("Computer: "+pointsComputer);
}
function totalGames(number){
    for (let i = 1; i <= number; i++ ){
        playGame();  
      }
}

checkWinner(humanScore, computerScore);
