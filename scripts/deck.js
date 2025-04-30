let deck = [];
let characterImages = {};

export async function loadDeck() {
    const response = await fetch('assets/cards/characters.json');
    const data = await response.json();
    deck = data.characters;

    // Load character images
    const imageResponse = await fetch('assets/images/chr_images.json');
    const imageData = await imageResponse.json();
    characterImages = imageData.images;
}

export function drawCard(currentPlayer) {
    if (deck.length > 0) {
        const card = deck.splice(Math.floor(Math.random() * deck.length), 1)[0];
        document.getElementById('deck-output').innerText = `You drew: ${card.name} (${card.job}) the ${card.type}`;

        const partyBoard = document.getElementById(`player${currentPlayer}-party`);
        const newMember = document.createElement('div');
        newMember.innerText = `${card.name} (${card.job}) the ${card.type}`;

        // Add character image
        if (characterImages[card.name]) {
            const img = document.createElement('img');
            img.src = characterImages[card.name].path;
            img.alt = characterImages[card.name].alt;
            img.style.width = '100px'; // Adjust size as needed
            img.style.height = '100px'; // Adjust size as needed
            newMember.appendChild(img);
        }

        partyBoard.appendChild(newMember);
    } else {
        document.getElementById('deck-output').innerText = "Deck is empty!";
    }
}