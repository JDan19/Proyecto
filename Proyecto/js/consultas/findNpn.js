const buscarPredio = () => {
    const npn = document.getElementById('in_npn').value
    if (npn === ''){
        alert('Digite un npn de 30 digitos')
    }else if(npn.length !== 30){
        alert('El numero suministrado debe ser de 30 digitos')
    }else{
        //const url = `http://44.214.39.85:8100/geovisor/geojson/${npn}`
        const url = `http://localhost:8100/geovisor/geojson/${npn}`
        fetch(url)
        .then(response => response.json()) 
        .then(json => {
            if (json.status === 1){
                
                if (json.data.construccion !== 0) {
                    const json_construccion = L.geoJSON(json.data.construccion);
                    json_construccion.addTo(map)

                } 
                

                const consulta = L.geoJSON(json.data.terrenos).addTo(map);
                map.flyToBounds(consulta.getBounds());
                console.log(json.message)
                
            }else{
                console.log(json.message)
            }

            
            console.log(json.data)
            const predio= json.data
            const properties_terreno = json.data.terrenos.properties
            const properties_construccion=json.data.construccion.properties

            document.getElementById('table_consulta_npn').innerHTML = predio.npn
            document.getElementById('table_consulta_direccion').innerHTML = predio?.direccion
            document.getElementById('table_consulta_destinacion_economica').innerHTML = predio.destinacion_economica
            //document.getElementById('table_consulta_condicion').innerHTML = predio.condicion

            document.getElementById('table_consulta_area').innerHTML = `${properties_terreno.area_digitada}M<sup>2</sup>`
            
            if (json.data.construccion !==0){
             
            document.getElementById('table_consulta_identificador').innerHTML = properties_construccion.identificador
            document.getElementById('table_consulta_area_construida').innerHTML = `${properties_construccion.area_construida} M<sup>2</sup>`
            document.getElementById('table_consulta_numero_pisos').innerHTML = properties_construccion.numero_pisos



            }

        }); 
    }
}
