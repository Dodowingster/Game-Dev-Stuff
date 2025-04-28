// mapManager.js

let mapData = null;
let currentNodeId = null;

/**
 * Load map JSON and render initial map.
 */
async function loadMap(mapFile = 'assets/maps/world_map.json') {
    const resp = await fetch(mapFile);
    mapData = await resp.json();

    // Start at the first node by default
    currentNodeId = mapData.nodes[0].id;
    renderMap();
    highlightCurrentNode();
}

/**
 * Render all nodes and their connections.
 */
function renderMap() {
    const mapDiv = document.querySelector('.map');
    mapDiv.innerHTML = '<h2>Map</h2>';
    const container = document.createElement('div');
    container.id = 'map-nodes';
    mapDiv.appendChild(container);

    mapData.nodes.forEach(node => {
        const el = document.createElement('div');
        el.className = 'node';
        el.id = `node-${node.id}`;
        el.innerText = node.name;
        el.onclick = () => tryMove(node.id);
        container.appendChild(el);
    });
}

/**
 * Attempt to move to a connected node.
 */
function tryMove(targetId) {
    // check connection exists
    const conn = mapData.connections.find(c =>
        (c.from === currentNodeId && c.to === targetId) ||
        (c.to === currentNodeId && c.from === targetId)
    );
    if (!conn) {
        alert('You cannot move directly there.');
        return;
    }
    currentNodeId = targetId;
    highlightCurrentNode();
    onEnterNode(getCurrentNode());
}

/**
 * Highlight the current node
 */
function highlightCurrentNode() {
    document.querySelectorAll('.node').forEach(el => {
        el.style.boxShadow = '';
    });
    const here = document.getElementById(`node-${currentNodeId}`);
    here.style.boxShadow = '0 0 10px 3px gold';
}

/**
 * Get the current node object
 */
function getCurrentNode() {
    return mapData.nodes.find(n => n.id === currentNodeId);
}

/**
 * Called whenever the player lands on a node.
 */
function onEnterNode(node) {
    const out = document.getElementById('event-output');
    switch (node.type) {
        case 'battle':
            out.innerText = `⚔️ You’ve entered the ${node.name}. Prepare for battle!`;
            // TODO: trigger battle logic
            break;
        case 'shop':
            out.innerText = `🏘️ You arrive at the ${node.name}. You can buy supplies.`;
            // TODO: open shop UI
            break;
        case 'event':
            out.innerText = `❓ Mysterious things happen in the ${node.name}.`;
            // TODO: draw from events.json
            break;
        case 'boss':
            out.innerText = `👑 The final boss awaits in the ${node.name}!`;
            // TODO: start boss encounter
            break;
        default:
            out.innerText = `You are at the ${node.name}.`;
    }
}

// initialize map when page loads
window.addEventListener('load', loadMap);
