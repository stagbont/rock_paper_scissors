// Create a computerPlay function with no argument
function computerPlay() {
    // create an array of the randomly play options
    playable_Arr = ["Rock", "Paper", "Scissors"];
    // Assign a variable with a random value of the array length
    ran_num = Math.floor(Math.random() * playable_Arr.length);
    // return the random variable to the as an index of playable_Arr
    return playable_Arr[1];
}

let computerSelection = computerPlay();
let score = 0;
let playSelection;

function playRound(playSelection, computerSelection) {
    let player = playSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if ((computer === "rock" && player === "paper") ||
        (computer === "paper" && player === "scissors") ||
        (computer === "scissors" && player === "rock")) {
            return console.log("You Won! " + player + " beats " + computer),
            score++;
    }

    else if ((computer === "paper" && player === "rock") ||
        (computer === "scissors" && player === "paper") ||
        (computer === "rock" && player === "scissors")) {
            return console.log("You Lose! " + computer + " beats " + player),
            score--;
        }
    
    else if (computer === player) {
        return console.log("Tie"),
        score;
    }
}
