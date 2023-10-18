// Initialize and add the map
let map;

async function initMap() {
  // The location of Indianapolis
  const position = { lat: 39.791000, lng: -86.148003 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Indianapolis
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Indianapolis
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Indianapolis",
  });
}

initMap();