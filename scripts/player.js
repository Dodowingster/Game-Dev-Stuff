export function addPlayer(playerId, playerName) {
    const partyBoard = document.querySelector('.party-board');
    const newPlayerDiv = document.createElement('div');
    newPlayerDiv.className = 'party';
    newPlayerDiv.id = `${playerId}-party`;
    newPlayerDiv.innerHTML = `<strong>${playerName}:</strong>`;
    partyBoard.appendChild(newPlayerDiv);
}

export function removePlayer(playerId) {
    const playerDiv = document.getElementById(`${playerId}-party`);
    if (playerDiv) {
        playerDiv.remove();
    }
}

export function renamePlayer(playerId, newPlayerName) {
    const playerDiv = document.getElementById(`${playerId}-party`);
    if (playerDiv) {
        playerDiv.innerHTML = `<strong>${newPlayerName}:</strong>`;
    }
}