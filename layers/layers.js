var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bahan_webGIS_1 = new ol.format.GeoJSON();
var features_Bahan_webGIS_1 = format_Bahan_webGIS_1.readFeatures(json_Bahan_webGIS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bahan_webGIS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bahan_webGIS_1.addFeatures(features_Bahan_webGIS_1);
var lyr_Bahan_webGIS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bahan_webGIS_1, 
                style: style_Bahan_webGIS_1,
                popuplayertitle: 'Bahan_webGIS',
                interactive: true,
    title: 'Bahan_webGIS<br />\
    <img src="styles/legend/Bahan_webGIS_1_0.png" /> N<br />\
    <img src="styles/legend/Bahan_webGIS_1_1.png" /> S2<br />\
    <img src="styles/legend/Bahan_webGIS_1_2.png" /> S3<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Bahan_webGIS_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bahan_webGIS_1];
lyr_Bahan_webGIS_1.set('fieldAliases', {'gridcode': 'gridcode', 'kelas_kese': 'kelas_kese', 'keterangan': 'keterangan', 'luas': 'luas', });
lyr_Bahan_webGIS_1.set('fieldImages', {'gridcode': 'TextEdit', 'kelas_kese': 'TextEdit', 'keterangan': 'TextEdit', 'luas': 'TextEdit', });
lyr_Bahan_webGIS_1.set('fieldLabels', {'gridcode': 'hidden field', 'kelas_kese': 'inline label - always visible', 'keterangan': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_Bahan_webGIS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});