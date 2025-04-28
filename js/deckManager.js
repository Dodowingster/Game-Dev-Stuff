async function loadDeck(deckType) {
    const response = await fetch(`assets/cards/${deckType}.json`);
    const data = await response.json();
    return data;
}
