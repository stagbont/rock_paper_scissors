// Create a computerPlay function with no argument
function computerPlay() {
    // create an array of the randomly play options
    playable_Arr = ["Rock", "Paper", "Scissors"];
    // Assign a variable with a random value of the array length
    ran_num = Math.floor(Math.random() * playable_Arr.length);
    // return the random variable to the as an index of playable_Arr
    return playable_Arr[1];
}
