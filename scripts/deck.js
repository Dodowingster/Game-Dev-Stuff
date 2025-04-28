let deck = [];

export async function loadDeck() {
    const response = await fetch('deck.json');
    const data = await response.json();
    deck = data.characters;
}

export function drawCard(currentPlayer) {
    if (deck.length > 0) {
        const card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
        document.getElementById('deck-output').innerText = `You drew: ${card.name} (${card.job}) the ${card.type}`;
        const partyBoard = document.getElementById(`player${currentPlayer}-party`);
        const newMember = document.createElement('div');
        newMember.innerText = `${card.name} (${card.job}) the ${card.type}`;
        partyBoard.appendChild(newMember);
    } else {
        document.getElementById('deck-output').innerText = "Deck is empty!";
    }
}