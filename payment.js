//Final view 


src="https://maps.googleapis.com/maps/api/js?key=c60345e170msh3ba019454a286afp1db6e3jsn281038817a0a&callback=initMap";

var image;
 function initMap() {
 image = new google.maps.Map(document.getElementById("map"), {
 center: { lat: -34.397, lng: 150.644 },
 zoom: 8
 });
 }