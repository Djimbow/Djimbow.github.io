var wms_layers = [];
var format_Nouvelle_Aquitaine_0 = new ol.format.GeoJSON();
var features_Nouvelle_Aquitaine_0 = format_Nouvelle_Aquitaine_0.readFeatures(json_Nouvelle_Aquitaine_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nouvelle_Aquitaine_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Nouvelle_Aquitaine_0.addFeatures(features_Nouvelle_Aquitaine_0);var lyr_Nouvelle_Aquitaine_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nouvelle_Aquitaine_0, 
                style: style_Nouvelle_Aquitaine_0,
    title: 'Nouvelle_Aquitaine<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_0.png" /> 19 - CC en elaboration<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_1.png" /> 21 - CC en revision<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_2.png" /> 11 - CC approuvee,13 - CC approuvee - PLU en elaboration<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_3.png" /> 99 - RNU<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_4.png" /> 39 - POS approuve,93 - POS approuve - PLU en revision<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_5.png" /> 31 - PLU en elaboration<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_6.png" /> 33 - PLU en revision<br />\
    <img src="styles/legend/Nouvelle_Aquitaine_0_7.png" /> 23 - PLU approuve<br />'
        });

lyr_Nouvelle_Aquitaine_0.setVisible(true);
var layersList = [lyr_Nouvelle_Aquitaine_0];
lyr_Nouvelle_Aquitaine_0.set('fieldAliases', {'ID': 'ID', 'NOM_COM': 'NOM_COM', 'NOM_COM_M': 'NOM_COM_M', 'INSEE_COM': 'INSEE_COM', 'STATUT': 'STATUT', 'POPULATION': 'POPULATION', 'INSEE_ARR': 'INSEE_ARR', 'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', 'CODE_EPCI': 'CODE_EPCI', 'DOCUBField2': 'DOCUBField2', 'DOCUBField3': 'DOCUBField3', });
lyr_Nouvelle_Aquitaine_0.set('fieldImages', {'ID': 'TextEdit', 'NOM_COM': 'TextEdit', 'NOM_COM_M': 'TextEdit', 'INSEE_COM': 'TextEdit', 'STATUT': 'TextEdit', 'POPULATION': 'Range', 'INSEE_ARR': 'TextEdit', 'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'NOM_REG': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_EPCI': 'TextEdit', 'DOCUBField2': 'TextEdit', 'DOCUBField3': 'TextEdit', });
lyr_Nouvelle_Aquitaine_0.set('fieldLabels', {'ID': 'no label', 'NOM_COM': 'no label', 'NOM_COM_M': 'no label', 'INSEE_COM': 'no label', 'STATUT': 'no label', 'POPULATION': 'no label', 'INSEE_ARR': 'no label', 'NOM_DEP': 'no label', 'INSEE_DEP': 'no label', 'NOM_REG': 'no label', 'INSEE_REG': 'no label', 'CODE_EPCI': 'no label', 'DOCUBField2': 'no label', 'DOCUBField3': 'no label', });
lyr_Nouvelle_Aquitaine_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});