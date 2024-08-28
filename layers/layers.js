var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PlanReguladorComunalAntofagasta_1 = new ol.format.GeoJSON();
var features_PlanReguladorComunalAntofagasta_1 = format_PlanReguladorComunalAntofagasta_1.readFeatures(json_PlanReguladorComunalAntofagasta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanReguladorComunalAntofagasta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanReguladorComunalAntofagasta_1.addFeatures(features_PlanReguladorComunalAntofagasta_1);
var lyr_PlanReguladorComunalAntofagasta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanReguladorComunalAntofagasta_1, 
                style: style_PlanReguladorComunalAntofagasta_1,
                popuplayertitle: "Plan Regulador Comunal - Antofagasta",
                interactive: true,
    title: 'Plan Regulador Comunal - Antofagasta<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_0.png" /> ALMACENAMIENTO COMBUSTIBLE<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_1.png" /> AREA VERDE<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_2.png" /> AREAS VERDES DE ESPARCIMIENTO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_3.png" /> BARRIO COMERCIO MAYORISTA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_4.png" /> BARRIO INDUSTRIAL INOFENSIVO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_5.png" /> BARRIO MIXTO HABITACIONAL<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_6.png" /> BARRIO RESIDENCIAL DENSIDAD BAJA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_7.png" /> BARRIOS RESIDENCIALES<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_8.png" /> CEMENTERIO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_9.png" /> CENTRO CIVICO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_10.png" /> CENTRO COMERCIAL E INSTITUCIONAL<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_11.png" /> EQUIPAMIENTO COMUNITARIO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_12.png" /> EQUIPAMIENTO ESPECIAL<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_13.png" /> LA CHIMBA ALTA- SECTOR SALAR DEL CARME<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_14.png" /> LA PORTADA ALTA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_15.png" /> NO APTAS ASENTAMIENTO HUMANO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_16.png" /> PRESERVACION DE SUELO AGRICOLA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_17.png" /> PRESERVACION PATRIMONIO CULTURAL<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_18.png" /> PROTECCION ALUVIAL<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_19.png" /> RECINTOS PORTUARIOS<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_20.png" /> RESERVA NATURAL Y TURISTICA PENINSULA DE MEJILLONES<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_21.png" /> RESERVA PARA USOS MIXTOS<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_22.png" /> SECTOR BORDE COSTERO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_23.png" /> SECTOR LA PORTADA BAJA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_24.png" /> SEGURIDAD AEROPUERTO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_25.png" /> SERVICIOS SANITARIOS<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_26.png" /> SUBCENTRO TURSTICO EL HUASCAR<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_27.png" /> SUBCENTROS URBANOS<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_28.png" /> ZONA COMERCIAL LA NEGRA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_29.png" /> ZONA EQUIPAMIENTO COMUNAL/VECINAL<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_30.png" /> ZONA MIXTA SUBCENTRO LA CHIMBA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_31.png" /> ZONA MIXTA, COMERCIAL, RECREATIVA TURISTICA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_32.png" /> ZONA RESIDENCIAL DE ALTA DENSIDAD<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_33.png" /> ZONA RESIDENCIAL DE BAJA DENSIDAD<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_34.png" /> ZONA RESIDENCIAL DE MEDIA DENSIDAD<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_35.png" /> ZONA TURISTICA DE CAMPING<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_36.png" /> ZONA TURISTICO HOTELERA<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_37.png" /> ZONA VERTEDERO<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_38.png" /> ZONAS TURISTICO RECREATIVAS<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_39.png" /> ZUDC FERROCARRIL MIXTA ALTA DENSIDAD<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_40.png" /> ZUDC FERROCARRIL RESIDENCIAL ALTA DENSIDAD<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_41.png" /> ZUDC PUERTO MIXTA ALTA DENSIDAD<br />\
    <img src="styles/legend/PlanReguladorComunalAntofagasta_1_42.png" /> ZUDC PUERTO RESIDENCIAL ALTA DENSIDAD<br />'
        });
var format_ConstruccionesPRCAntofagasta_2 = new ol.format.GeoJSON();
var features_ConstruccionesPRCAntofagasta_2 = format_ConstruccionesPRCAntofagasta_2.readFeatures(json_ConstruccionesPRCAntofagasta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConstruccionesPRCAntofagasta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConstruccionesPRCAntofagasta_2.addFeatures(features_ConstruccionesPRCAntofagasta_2);
var lyr_ConstruccionesPRCAntofagasta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConstruccionesPRCAntofagasta_2, 
                style: style_ConstruccionesPRCAntofagasta_2,
                popuplayertitle: "Construcciones PRC Antofagasta",
                interactive: true,
                title: '<img src="styles/legend/ConstruccionesPRCAntofagasta_2.png" /> Construcciones PRC Antofagasta'
            });
var format_ProyectosSEA_3 = new ol.format.GeoJSON();
var features_ProyectosSEA_3 = format_ProyectosSEA_3.readFeatures(json_ProyectosSEA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProyectosSEA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProyectosSEA_3.addFeatures(features_ProyectosSEA_3);
var lyr_ProyectosSEA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProyectosSEA_3, 
                style: style_ProyectosSEA_3,
                popuplayertitle: "Proyectos SEA",
                interactive: true,
                title: '<img src="styles/legend/ProyectosSEA_3.png" /> Proyectos SEA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PlanReguladorComunalAntofagasta_1.setVisible(true);lyr_ConstruccionesPRCAntofagasta_2.setVisible(true);lyr_ProyectosSEA_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PlanReguladorComunalAntofagasta_1,lyr_ConstruccionesPRCAntofagasta_2,lyr_ProyectosSEA_3];
lyr_PlanReguladorComunalAntofagasta_1.set('fieldAliases', {'FID': 'FID', 'id': 'id', 'prc': 'prc', 'comuna': 'comuna', 'fid_': 'fid_', 'id_1': 'id_1', 'prc_1': 'prc_1', 'comuna_1': 'comuna_1', 'descrip': 'descrip', 'u_1': 'u_1', 'u_2_1_1': 'u_2_1_1', 'u_2_1_2': 'u_2_1_2', 'u_2_2_1': 'u_2_2_1', 'u_2_2_2': 'u_2_2_2', 'u_2_3_1': 'u_2_3_1', 'u_2_3_2': 'u_2_3_2', 'u_2_4_1': 'u_2_4_1', 'u_2_4_2': 'u_2_4_2', 'u_2_5_1': 'u_2_5_1', 'u_2_5_2': 'u_2_5_2', 'u_2_6_1': 'u_2_6_1', 'u_2_6_2': 'u_2_6_2', 'u_2_7_1': 'u_2_7_1', 'u_2_7_2': 'u_2_7_2', 'u_2_8_1': 'u_2_8_1', 'u_2_8_2': 'u_2_8_2', 'u_2_9_1': 'u_2_9_1', 'u_2_9_2': 'u_2_9_2', 'u_3_1': 'u_3_1', 'u_3_2': 'u_3_2', 'u_4': 'u_4', 'u_5_1': 'u_5_1', 'u_5_2': 'u_5_2', 'dmin': 'dmin', 'dmax': 'dmax', 'ccmin': 'ccmin', 'ccmax': 'ccmax', 'categoria_': 'categoria_', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_ConstruccionesPRCAntofagasta_2.set('fieldAliases', {'area_in_me': 'area_in_me', 'confidence': 'confidence', 'full_plus_': 'full_plus_', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'prc': 'prc', 'descrip': 'descrip', });
lyr_ProyectosSEA_3.set('fieldAliases', {'Nombre': 'Nombre', 'WEB': 'WEB', 'Tipo': 'Tipo', 'Región': 'Región', 'Comunas': 'Comunas', 'Provincias': 'Provincias', 'Tipología': 'Tipología', 'Razón de': 'Razón de', 'Titular': 'Titular', 'Inversión': 'Inversión', 'Fecha pres': 'Fecha pres', 'Estado': 'Estado', 'Fecha cali': 'Fecha cali', 'Sector pro': 'Sector pro', 'Latitud pu': 'Latitud pu', 'Longitud p': 'Longitud p', 'CUT_REG': 'CUT_REG', 'CUT_PROV': 'CUT_PROV', 'CUT_COM': 'CUT_COM', 'REGION': 'REGION', 'PROVINCIA': 'PROVINCIA', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', });
lyr_PlanReguladorComunalAntofagasta_1.set('fieldImages', {'FID': 'Range', 'id': 'Range', 'prc': 'TextEdit', 'comuna': 'TextEdit', 'fid_': 'Range', 'id_1': 'Range', 'prc_1': 'TextEdit', 'comuna_1': 'TextEdit', 'descrip': 'TextEdit', 'u_1': 'TextEdit', 'u_2_1_1': 'TextEdit', 'u_2_1_2': 'TextEdit', 'u_2_2_1': 'TextEdit', 'u_2_2_2': 'TextEdit', 'u_2_3_1': 'TextEdit', 'u_2_3_2': 'TextEdit', 'u_2_4_1': 'TextEdit', 'u_2_4_2': 'TextEdit', 'u_2_5_1': 'TextEdit', 'u_2_5_2': 'TextEdit', 'u_2_6_1': 'TextEdit', 'u_2_6_2': 'TextEdit', 'u_2_7_1': 'TextEdit', 'u_2_7_2': 'TextEdit', 'u_2_8_1': 'TextEdit', 'u_2_8_2': 'TextEdit', 'u_2_9_1': 'TextEdit', 'u_2_9_2': 'TextEdit', 'u_3_1': 'TextEdit', 'u_3_2': 'TextEdit', 'u_4': 'TextEdit', 'u_5_1': 'TextEdit', 'u_5_2': 'TextEdit', 'dmin': 'Range', 'dmax': 'Range', 'ccmin': 'Range', 'ccmax': 'TextEdit', 'categoria_': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_ConstruccionesPRCAntofagasta_2.set('fieldImages', {'area_in_me': 'TextEdit', 'confidence': 'TextEdit', 'full_plus_': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'prc': 'TextEdit', 'descrip': 'TextEdit', });
lyr_ProyectosSEA_3.set('fieldImages', {'Nombre': 'TextEdit', 'WEB': 'TextEdit', 'Tipo': 'TextEdit', 'Región': 'TextEdit', 'Comunas': 'TextEdit', 'Provincias': 'TextEdit', 'Tipología': 'TextEdit', 'Razón de': 'TextEdit', 'Titular': 'TextEdit', 'Inversión': 'TextEdit', 'Fecha pres': 'TextEdit', 'Estado': 'TextEdit', 'Fecha cali': 'TextEdit', 'Sector pro': 'TextEdit', 'Latitud pu': 'TextEdit', 'Longitud p': 'TextEdit', 'CUT_REG': 'TextEdit', 'CUT_PROV': 'TextEdit', 'CUT_COM': 'TextEdit', 'REGION': 'TextEdit', 'PROVINCIA': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', });
lyr_PlanReguladorComunalAntofagasta_1.set('fieldLabels', {'FID': 'no label', 'id': 'no label', 'prc': 'header label - visible with data', 'comuna': 'no label', 'fid_': 'no label', 'id_1': 'no label', 'prc_1': 'no label', 'comuna_1': 'no label', 'descrip': 'header label - visible with data', 'u_1': 'no label', 'u_2_1_1': 'no label', 'u_2_1_2': 'no label', 'u_2_2_1': 'no label', 'u_2_2_2': 'no label', 'u_2_3_1': 'no label', 'u_2_3_2': 'no label', 'u_2_4_1': 'no label', 'u_2_4_2': 'no label', 'u_2_5_1': 'no label', 'u_2_5_2': 'no label', 'u_2_6_1': 'no label', 'u_2_6_2': 'no label', 'u_2_7_1': 'no label', 'u_2_7_2': 'no label', 'u_2_8_1': 'no label', 'u_2_8_2': 'no label', 'u_2_9_1': 'no label', 'u_2_9_2': 'no label', 'u_3_1': 'no label', 'u_3_2': 'no label', 'u_4': 'no label', 'u_5_1': 'no label', 'u_5_2': 'no label', 'dmin': 'no label', 'dmax': 'no label', 'ccmin': 'no label', 'ccmax': 'no label', 'categoria_': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_ConstruccionesPRCAntofagasta_2.set('fieldLabels', {'area_in_me': 'no label', 'confidence': 'no label', 'full_plus_': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'prc': 'header label - visible with data', 'descrip': 'header label - visible with data', });
lyr_ProyectosSEA_3.set('fieldLabels', {'Nombre': 'inline label - visible with data', 'WEB': 'no label', 'Tipo': 'no label', 'Región': 'no label', 'Comunas': 'inline label - visible with data', 'Provincias': 'no label', 'Tipología': 'inline label - visible with data', 'Razón de': 'no label', 'Titular': 'no label', 'Inversión': 'no label', 'Fecha pres': 'no label', 'Estado': 'no label', 'Fecha cali': 'no label', 'Sector pro': 'no label', 'Latitud pu': 'no label', 'Longitud p': 'no label', 'CUT_REG': 'no label', 'CUT_PROV': 'no label', 'CUT_COM': 'no label', 'REGION': 'no label', 'PROVINCIA': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', });
lyr_ProyectosSEA_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});