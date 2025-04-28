import { loadDeck, drawCard } from './deck.js';
import { currentPlayer, moveTo, endTurn } from './game.js';
import { loadMap } from './map.js';
import { addPlayer, removePlayer, renamePlayer } from './player.js';

window.onload = async () => {
    await loadDeck();
    await loadMap();
};

// Attach functions to global scope for button clicks
window.drawCard = () => drawCard(currentPlayer);
window.endTurn = endTurn;

let playerCount = 2; // Start with 2 players already in the HTML

function handleAddPlayer() {
    const playerName = document.getElementById('add-player-name').value.trim();
    if (playerName) {
        playerCount++;
        const playerId = `player${playerCount}`;
        addPlayer(playerId, playerName);
        document.getElementById('add-player-name').value = ''; // Clear input
    } else {
        alert('Please enter a player name.');
    }
}

function handleRemovePlayer() {
    const playerId = document.getElementById('remove-player-id').value.trim();
    if (playerId) {
        removePlayer(playerId);
        document.getElementById('remove-player-id').value = ''; // Clear input
    } else {
        alert('Please enter a valid player ID.');
    }
}

function handleRenamePlayer() {
    const playerId = document.getElementById('rename-player-id').value.trim();
    const newPlayerName = document.getElementById('rename-player-name').value.trim();
    if (playerId && newPlayerName) {
        renamePlayer(playerId, newPlayerName);
        document.getElementById('rename-player-id').value = ''; // Clear input
        document.getElementById('rename-player-name').value = ''; // Clear input
    } else {
        alert('Please enter both a valid player ID and a new name.');
    }
}