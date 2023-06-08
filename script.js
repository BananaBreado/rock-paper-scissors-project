let getComputerChoice = () => {
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";

    const three_results = rock + paper + scissors;
    let random = Math.floor(Math.random() * three_results);
    return random;
}