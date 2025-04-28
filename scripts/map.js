export async function loadMap() {
    const response = await fetch('assets/maps/world_map.json');
    const mapData = await response.json();
    renderMap(mapData.nodes);
}

function renderMap(nodes) {
    const mapContainer = document.querySelector('.map > div');
    mapContainer.innerHTML = ''; // Clear existing nodes

    nodes.forEach(node => {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'node';
        nodeElement.innerHTML = `${node.icon} ${node.name}`;
        nodeElement.title = node.description; // Tooltip for description
        nodeElement.onclick = () => moveTo(node.name);
        mapContainer.appendChild(nodeElement);
    });
}

function moveTo(location) {
    document.getElementById('event-output').innerText = `You moved to: ${location}`;
}