const communities = [
    {
        name: "Rust Community 1",
        description: "A vibrant community of Rust enthusiasts.",
        image: "https://via.placeholder.com/150",
        link: "https://community1.example.com",
        coordinates: [-0.1278, 51.5074], // Test coordinates
        continent: "Europe"
    },
    {
        name: "Rust Community 2",
        description: "Dedicated to sharing knowledge about Rust programming.",
        image: "https://via.placeholder.com/150",
        link: "https://community2.example.com",
        coordinates: [-118.2437, 34.0522], 
        continent: "North America"
    },
    {
        name: "Rust Community 3",
        description: "A community focused on game development using Rust.",
        image: "https://via.placeholder.com/150",
        link: "https://community3.example.com",
        coordinates: [-74.0060, 40.7128], 
        continent: "North America"
    },
];


// Initialize the MapLibre map
const map = new maplibregl.Map({
    container: 'map', // The ID of the container where the map will be displayed
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: [0, 20],
    zoom: 2, // Initial zoom level
});

const bounds = new maplibregl.LngLatBounds();

const ferrisIconUrl = 'ferris-crab.png';  // Path to your local image

communities.forEach(community => {
    const [lng, lat] = community.coordinates;

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        console.error(`Skipping ${community.name} due to invalid coordinates: [${lng}, ${lat}]`);
        return;
    }

    const marker = new maplibregl.Marker({
        element: createMarkerElement(ferrisIconUrl),
    })
    .setLngLat([lng, lat]) 
    .addTo(map);

    // Add click event to show details in sidebar when clicking on a marker
    marker.getElement().addEventListener('click', function() {
        const communityItem = document.querySelector(`[data-name="${community.name}"]`);
        updateSidebar(community, communityItem);
    });

    bounds.extend([lng, lat]);

    // Add community to sidebar
    addCommunityToSidebar(community);
});

map.fitBounds(bounds, { padding: 50 });

function createMarkerElement(iconUrl) {
    const element = document.createElement('div');
    element.className = 'marker';
    const img = document.createElement('img');
    img.src = iconUrl;
    img.alt = "Ferris Crab Icon";
    img.style.width = '20px';
    img.style.height = '16px';
    img.style.cursor = 'pointer'; 
    element.appendChild(img);
    return element;
}

// Function to update the sidebar with community details
function updateSidebar(community, communityItem = null) {
    document.querySelectorAll(".community-details").forEach(el => el.remove());

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("community-details");

    detailsDiv.innerHTML = `
        <img src="${community.image}" alt="${community.name}" class="community-img">
        <p class="community-name">${community.name}</p>
        <p class="community-description">${community.description}</p>
        <a class="community-link" href="${community.link}" target="_blank">Visit Website</a>
    `;

    if (communityItem) {
        communityItem.after(detailsDiv);
    } else {
        document.getElementById("community-list").appendChild(detailsDiv);
    }
}

function addCommunityToSidebar(community) {
    const sidebar = document.getElementById("community-list");

    // Check if the continent section already exists
    let continentSection = document.querySelector(`[data-continent="${community.continent}"]`);

    if (!continentSection) {
        continentSection = document.createElement("div");
        continentSection.classList.add("continent-section");
        continentSection.setAttribute("data-continent", community.continent);
        continentSection.innerHTML = `<h3 class="continent-title">${community.continent}</h3>`;
        sidebar.appendChild(continentSection);
    }

    // Create the community item
    const communityItem = document.createElement("p");
    communityItem.classList.add("community-item");
    communityItem.textContent = community.name;
    communityItem.setAttribute("data-name", community.name);

    communityItem.addEventListener("click", function() {
        updateSidebar(community, communityItem);
    });

    continentSection.appendChild(communityItem);
}
 