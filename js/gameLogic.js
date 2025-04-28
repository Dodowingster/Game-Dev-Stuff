let currentPlayer = 1;

function endTurn() {
    currentPlayer = (currentPlayer % 3) + 1; // Example for 3 players
    document.getElementById('turn-output').innerText = "Current Player: Player " + currentPlayer;
}
