const communities = window.communities;

const countryFlags = {
    // 🌍 Europe
    "Belgium": "🇧🇪",
    "Czech Republic": "🇨🇿",
    "Denmark": "🇩🇰",
    "France": "🇫🇷",
    "Finland": "🇫🇮",
    "Germany": "🇩🇪",
    "Lithuania": "🇱🇹",
    "Netherlands": "🇳🇱",
    "Norway": "🇳🇴",
    "Poland": "🇵🇱",
    "Russia": "🇷🇺",
    "Serbia": "🇷🇸",
    "Spain": "🇪🇸",
    "Sweden": "🇸🇪",
    "Switzerland": "🇨🇭",
    "United Kingdom": "🇬🇧",
    "Ireland": "🇮🇪",
    "Slovakia": "🇸🇰",
    "Georgia": "🇬🇪",
    "Croatia": "🇭🇷",

    // 🌎 North America
    "USA": "🇺🇸",
    "Canada": "🇨🇦",
    "Mexico": "🇲🇽",

    // 🌏 Australia & New Zealand
    "Australia": "🇦🇺",
    "New Zealand": "🇳🇿",

    // 🌍 South America
    "Argentina": "🇦🇷",
    "Brazil": "🇧🇷",
    "Colombia": "🇨🇴",
    "Uruguay": "🇺🇾",

    // 🌍 Africa
    "Kenya": "🇰🇪",
    "Nigeria": "🇳🇬",
    "South Africa": "🇿🇦",
    "Uganda": "🇺🇬",

    // 🌏 Asia
    "India": "🇮🇳",
    "Indonesia": "🇮🇩",
    "Israel": "🇮🇱",
    "Japan": "🇯🇵",
    "Singapore": "🇸🇬",
    "South Korea": "🇰🇷",
    "Taiwan": "🇹🇼",
    "Uzbekistan": "🇺🇿"
};

const continentFlags = {
    "North America": "🌎",
    "South America": "🌎",
    "Europe": "🌍",
    "Africa": "🌍",
    "Asia": "🌏",
    "Oceania": "🌏"
};


console.log(communities);

// Sort the communities array: first by continent, then by country, then by name
communities.sort((a, b) => {
    if (a.continent !== b.continent) {
        return a.continent.localeCompare(b.continent); // Sort continents alphabetically
    }
    if (a.country !== b.country) {
        return a.country.localeCompare(b.country); // Sort countries alphabetically within continents
    }
    return a.name.localeCompare(b.name); // Sort communities alphabetically within countries
});


// Initialize the MapLibre map
const map = new maplibregl.Map({
    container: 'map', 
    style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
    center: [0, 20],
    zoom: 2, // Initial zoom level
});

const bounds = new maplibregl.LngLatBounds();

const ferrisIconUrl = 'ferris-crab.png';

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
        
        if (communityItem) {
            updateSidebar(community, communityItem);

            // Scroll to the selected community smoothly
            communityItem.scrollIntoView({ behavior: "smooth", block: "center" });
        }
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


function updateSidebar(community, communityItem) {
    // Remove any existing community details before adding new ones
    document.querySelectorAll(".community-details").forEach(el => el.remove());

    // Store original community name to restore later
    const originalText = communityItem.textContent;
    communityItem.textContent = ""; // Remove text but keep it clickable

    // Create a new details container
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("community-details");

    // Ensure only "Visit Website" is a link
    detailsDiv.innerHTML = `
        <div class="community-box">
            <h3 class="community-title">${community.name}</h3>
            <p class="community-description">${community.description}</p>
            <a class="community-link" href="${community.link}" target="_blank">Visit Website</a>
        </div>
    `;

    // Insert the details **in place of the clicked item**
    communityItem.appendChild(detailsDiv);

    // Restore the community name when clicking outside
    function hideDetails(event) {
        if (!detailsDiv.contains(event.target)) {
            detailsDiv.remove(); // Remove the details box
            communityItem.textContent = originalText; // Restore the sidebar name
            document.removeEventListener("click", hideDetails); // Clean up event listener
        }
    }

    // Add event listener to close details when clicking outside
    setTimeout(() => {
        document.addEventListener("click", hideDetails);
    }, 100); // Delay to prevent immediate closing when clicking the item
}

function addCommunityToSidebar(community) {
    const sidebar = document.getElementById("community-list");

    // Get the flag for the continent and country, default to empty if not found
    const continentFlag = continentFlags[community.continent] || "";
    const countryFlag = countryFlags[community.country] || "";

    // Check if the continent section already exists
    let continentSection = document.querySelector(`[data-continent="${community.continent}"]`);
    if (!continentSection) {
        continentSection = document.createElement("div");
        continentSection.classList.add("continent-section");
        continentSection.setAttribute("data-continent", community.continent);
        continentSection.innerHTML = `<h2 class="continent-title">${continentFlag} ${community.continent}</h2>`;
        sidebar.appendChild(continentSection);
    }

    // Check if the country section already exists within this continent
    let countrySection = continentSection.querySelector(`[data-country="${community.country}"]`);
    if (!countrySection) {
        countrySection = document.createElement("div");
        countrySection.classList.add("country-section");
        countrySection.setAttribute("data-country", community.country);
        countrySection.innerHTML = `<h4 class="country-title">${countryFlag} ${community.country}</h4>`;
        continentSection.appendChild(countrySection);
    }

    // Check if this city already exists in the sidebar to prevent duplicate names
    if (document.querySelector(`[data-name="${community.name}"]`)) {
        console.error(`Duplicate entry detected in sidebar: ${community.name}. Skipping.`);
        return;
    }

    // Create the community item
    const communityItem = document.createElement("p");
    communityItem.classList.add("community-item");
    communityItem.textContent = community.name;
    communityItem.setAttribute("data-name", community.name);

    communityItem.addEventListener("click", function() {
        updateSidebar(community, communityItem);
    });

    countrySection.appendChild(communityItem);
}
