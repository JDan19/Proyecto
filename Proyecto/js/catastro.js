var construccion_style = {
    color: '#5D5D00',
    fillColor: '#F9FF89',
    fillOpacity: 1,
    weight: 0.1,
    zIndex: 10
};

var terreno_style = {
    color: 'black',
    fillColor: '#FFFFFF00',
    fillOpacity: 1,
    weight: 0.1,
    zIndex: 5
};

var manzana_style = {
    color: '#005C50',
    fillColor: '#A8DFD8',
    fillOpacity: 0.5,
    weight: 0.1,
    zIndex: 15
};

function color_ver(nom) {
    return nom === 'CABECERA MPAL.' ? '#094A00' :
    nom === 'EL LINDERO' ? '#1E5E11' :
    nom === 'QUEBRADA GRANDE' ? '#337E22' :
    nom === 'LA DESPENSA' ? '#489F34' :
    nom === 'CORCEGA' ? '#5EBF45' :
    nom === 'LA AGUADA' ? '#74DF57' :
    nom === 'SAN LUIS' ? '#8AFC68' :
    '#FC4E2A';
}

function vereda_style(feature) {
    return {
        fillColor: color_ver(feature.properties.NOMBRE),
        opacity: 1,
        weight: 0,
        fillOpacity: 0.5,
        zIndex: 20
    };
}



var ver = L.geoJSON(vereda, {style: vereda_style}).addTo(map);
var man = L.geoJSON(manzana,{style: manzana_style}).addTo(map);
var con = L.geoJSON(construccion,{style:construccion_style}).addTo(map);
var ter = L.geoJSON(terreno, {
    style: terreno_style,
    onEachFeature: function(feature, layer) {
        // does this feature have a property named popupContent?
        layer.bindPopup(feature.properties.CODIGO);
    }
}).addTo(map);

