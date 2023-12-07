// var map = L.map('map', {
//     maxBounds: L.latLngBounds(
//         L.latLng(4.58, -76.20), // Esquina superior izquierda del área permitida
//         L.latLng(4.5, -76.0)  // Esquina inferior derecha del área permitida
//       )
//   }).setView([4.54, -76.10], 12);


var map = L.map('map', {
    center: [4.54, -76.10],
    zoom: 10
});


var mapa_base = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
    minZoom: 12,
	maxZoom: 20
}).addTo(map);
