import { loadDeck, drawCard } from './deck.js';
import { currentPlayer, moveTo, endTurn } from './game.js';
import { loadMap } from './map.js';

window.onload = async () => {
    await loadDeck();
    await loadMap();
};

// Attach functions to global scope for button clicks
window.drawCard = () => drawCard(currentPlayer);
window.endTurn = endTurn;