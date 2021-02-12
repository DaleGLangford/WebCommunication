// ########### Contact Map #############

// Initialize and add the map
function initMap() {
// The location of Uluru
const uluru = { lat: -25.344, lng: 131.036 }; // uluru variable set at lat long
// The map, centered at Uluru
const map = new google.maps.Map(document.getElementById("contactMap"), {
    zoom: 4,
    center: uluru, // centres on Uluru
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
    position: uluru,
    map: map,
});
}