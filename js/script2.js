let map;

async function initMap() {
    const position = { lat: -25.5985964088189, lng: -54.57055400131922 };

    try {
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

        // The map, centered at Mian Rest
        map = new Map(document.getElementById("map"), {
            zoom: 17,
            center: position,
            mapId: "map",
        });

        // The marker, positioned at Mian Rest
        const marker = new AdvancedMarkerView({
            map: map,
            position: position,
            title: "Holy",
        });
    } catch (error) {
        console.error("Error initializing Google Map:", error);
    }
}

initMap();

