let humanScore = 0;
let computerScore = 0;
let count = 1;
const div = document.querySelector('div');
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
    
    
    
    
    const p = document.createElement('p');
    if(humanChoice === "rock" && computerChoice === "scissors"){
       console.log("Human won!")
       p.textContent = 'Human won!'
        humanScore++;
    }else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        p.textContent = 'Computer won!'
       console.log("Computer won!")
    }

    //
    if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("Human won!")
        p.textContent = 'Human won!'
        humanScore++;
    }else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        p.textContent = 'Computer won!'
        console.log("Computer won!")
    }

    //
    if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("Human won!")
        p.textContent = 'Human won!'
        humanScore++;
    }else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        p.textContent = 'Computer won!'
        console.log("Computer won!")
    }

    div.appendChild(p);
    checkForCount(count);
    count++;
    
}
function checkForCount(number){
    if (number === 5){
        checkWinner(humanScore, computerScore);
    }
}
function playGame(humanChoice){
    const humanSelection = humanChoice.toLowerCase();
    const computerSelection = getComputerChoic();

    playRound(humanSelection, computerSelection)

}


console.log("\n ------------------------------------")

function checkWinner(pointsHuman, pointsComputer){
    const h1 = document.createElement('h1');
    if (pointsHuman > pointsComputer){
        h1.textContent = 'Human won the game'
        console.log("Human won the game!")
    }else if(pointsComputer > pointsHuman){
        h1.textContent = 'Computer won the game'
        console.log("Computer won the game!")
    }else{
        h1.textContent = 'No winners!';
        console.log("No winners!")
    }

   
    console.log("Human: "+pointsHuman);
    console.log("Computer: "+pointsComputer);
    div.appendChild(h1);
    const score = document.createElement('div');
    score.innerHTML = `
        <h3> Final score </h3>
        <h4> Human: ${pointsHuman} </h4>
        <h4> Human: ${pointsComputer} </h4>

    
    `;

    div.appendChild(score);
}




const buttons = document.querySelectorAll('.btns');

buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
        playGame(button.innerHTML);
    }
)});

