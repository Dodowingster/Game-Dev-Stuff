async function loadDeck(deckType) {
    const response = await fetch(`assets/decks/${deckType}.json`);
    const data = await response.json();
    return data;
}
