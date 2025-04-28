import { loadDeck, drawCard } from './deck.js';
import { currentPlayer, moveTo, endTurn } from './game.js';
import { loadMap } from './map.js';

window.onload = async () => {
    await loadDeck();
    await loadMap();
};

let playerCount = 2; // Start with 2 players

export function addPlayer() {
    playerCount++;
    const playerSlots = document.getElementById('player-slots');

    const newPlayerDiv = document.createElement('div');
    newPlayerDiv.className = 'party';
    newPlayerDiv.id = `player${playerCount}-party`;

    newPlayerDiv.innerHTML = `
        <strong id="player${playerCount}-name">Player ${playerCount}:</strong>
        <input type="text" id="player${playerCount}-input" placeholder="Rename Player ${playerCount}">
        <button onclick="renamePlayer('player${playerCount}')">Rename</button>
    `;

    playerSlots.appendChild(newPlayerDiv);
}

export function removePlayer() {
    if (playerCount > 2) { // Ensure at least 2 players remain
        const playerSlots = document.getElementById('player-slots');
        const lastPlayerDiv = document.getElementById(`player${playerCount}-party`);
        playerSlots.removeChild(lastPlayerDiv);
        playerCount--;
    } else {
        alert('You must have at least 2 players.');
    }
}

export function renamePlayer(playerId) {
    const input = document.getElementById(`${playerId}-input`);
    const nameDisplay = document.getElementById(`${playerId}-name`);
    const newName = input.value.trim();

    if (newName) {
        nameDisplay.textContent = `${newName}:`;
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter a valid name.');
    }
}

// Attach functions to global scope for button clicks
window.drawCard = () => drawCard(currentPlayer);
window.endTurn = endTurn;