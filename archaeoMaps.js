// ########### Contact Map #############

// Initialize and add the map
function initMap() {
// The location of Lakehead University
const Lakehead = { lat: 48.421, lng: -89.260 }; // Lakehead variable set at lat long
// The map, centered at Lakehead
const map = new google.maps.Map(document.getElementById("contactMap"), {
zoom: 13,
center: Lakehead, // centres on Lakehead
});
// The marker, positioned at Lakehead
const marker = new google.maps.Marker({
position: Lakehead,
map: map,
});
}