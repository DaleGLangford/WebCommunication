// ########### Contact Map #############

// Initialize and add the map
function initMap() {
// The location of my old place in Stony
const Stony = { lat: 52.05640827732168, lng: -0.8504520908370468 }; // Home Location 52.05640827732168, -0.8504520908370468
// The map, centered at Stony Stratfor
const map = new google.maps.Map(document.getElementById("contactMap"), {
zoom: 13,
center: Stony, // centres on Lakehead
});
// The marker, positioned at Lakehead
const marker = new google.maps.Marker({
position: Stony,
map: map,
});
}
