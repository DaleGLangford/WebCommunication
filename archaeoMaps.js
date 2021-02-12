// ########### Contact Map #############

// Initialize and add the map
function initMap() {
// The location of my old place in Stony
const Stony = { lat: 52.05640827732168, lng: -0.8504520908370468 }; // Home Location 52.05640827732168, -0.8504520908370468

const map = new google.maps.Map(document.getElementById("contactMap"), {
zoom: 13,
center: Stony, // centres on Lakehead
mapTypeId: "terrain",
});
// The marker, positioned at Lakehead
const marker = new google.maps.Marker({
position: Stony,
map: map,
});

const stonyContent = 
'<div><h2> 3 Anthony Court</h2></div>' +
'<div>Stony Stratford</div>' +
'<div>Buckinghamshire</div>' +
'<div><b>Phone:</b> 1 (123) 456-7897</div>' +
'<div><b>Email:</b> dalemapsthings@gmail.com</div>';

const stonyIW = new google.maps.InfoWindow({
    content: stonyContent,
});

marker.addListener("click", () => {
    stonyIW.open(map, marker)
});

}
