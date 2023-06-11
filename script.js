const getComputerChoice = () => {
    const choices = ["Paper", "Scissors", "Rock"];
    const randomChoice = (Math.floor(Math.random() * 3));
    console.log(choices[randomChoice]);
}

const game = (player_choice, pc_choice) => {
    if (
        ( player_choice === "Rock" && pc_choice === "Scissors" ) ||
        ( player_choice === "Paper" && pc_choice === "Rock" ) ||
        ( player_choice === "Scissors" && pc_choice === "Paper" )
    ) {
        console.log(`You have chosen ${player_choice} and the adversary has chosen ${pc_choice}, you win!`)
        player_choice++;
    }
    else if (
        ( player_choice === "Scissors" && pc_choice === "Rock" ) ||
        ( player_choice === "Rock" && pc_choice === "Paper" ) ||
        ( player_choice === "Paper" && pc_choice === "Scissors" )
    ) {
        console.log(`You have chosen ${player_choice} and the adversary has chosen ${pc_choice}, you lost!`)
        pc_choice++;
    }
    else {
        console.log("It's a tie!")
    }
}

getComputerChoice();
