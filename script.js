const getComputerChoice = () => {
    const choices = ["paper", "scissors", "rock"];
    const randomChoice = (Math.floor(Math.random() * 3));
    return (choices[randomChoice]);
}

const game = () => {
    user_score = 0;
    pc_score = 0;
    for (i = 0; i < 5; i++) {
        const playRound = (player_choice, pc_choice) => {
            player_choice = player_choice.toLowerCase();
            if (
                ( player_choice == "rock" && pc_choice == "scissors" ) ||
                ( player_choice == "paper" && pc_choice == "rock" ) ||
                ( player_choice == "scissors" && pc_choice == "paper" )
            ) {
                user_score++
                return `You have chosen ${player_choice} and the adversary has chosen ${pc_choice}, you win!`;
            }
            else if (
                ( player_choice == "scissors" && pc_choice == "rock" ) ||
                ( player_choice == "rock" && pc_choice == "paper" ) ||
                ( player_choice == "paper" && pc_choice == "scissors" )
            ) {
                pc_score++
                return `You have chosen ${player_choice} and the adversary has chosen ${pc_choice}, you lost!`;
            }
            else if ( player_choice === pc_choice) {
                return `You have chosen ${player_choice} and the adversary has chosen ${pc_choice}, it's a tie!`;
            }
        }
    }
}

const playerSelection = "Scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
