const getComputerChoice = () => {
    const choices = ["Paper", "Scissors", "Rock"];
    const randomChoice = (Math.floor(Math.random() * 3));
    console.log(choices[randomChoice]);
}

getComputerChoice();