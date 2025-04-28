export let currentPlayer = 1;

export function moveTo(location) {
    document.getElementById('event-output').innerText = `You moved to: ${location}`;
}

export function endTurn() {
    currentPlayer = (currentPlayer % 2) + 1;
    document.getElementById('turn-output').innerText = `Current Player: Player ${currentPlayer}`;
}