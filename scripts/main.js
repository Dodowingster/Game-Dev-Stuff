import { loadDeck, drawCard } from './deck.js';
import { currentPlayer, moveTo, endTurn } from './game.js';

window.onload = async () => {
    await loadDeck();
};

// Attach functions to global scope for button clicks
window.drawCard = () => drawCard(currentPlayer);
window.moveTo = moveTo;
window.endTurn = endTurn;