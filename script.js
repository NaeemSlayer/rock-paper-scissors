function getComputerChoice() {
    const choises = [ "Rock","Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choises.length);
    return choises[randomIndex];
}
