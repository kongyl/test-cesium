<template>
  <div id="cesiumContainer">
    <div id="credit" hidden></div>
  </div>  
</template>

<script>
require('cesium/Widgets/widgets.css');
let Cesium = require('cesium/Cesium');

let viewer = undefined;
const buildingUrl = 'http://172.16.217.62:6080/arcgis/rest/services';
const baseUrl = 'http://172.16.217.82:6080/arcgis/rest/services';

export default {
  name: 'Test',
  mounted() {
    var baseLayer = new Cesium.TileMapServiceImageryProvider({
      url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
    });
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ODNjMmQ2Mi1hMTBlLTQxM2YtODBkMS1iM2MzNmY3OTFkZmYiLCJpZCI6NDAwNiwic2NvcGVzIjpbImFzciJdLCJhc3NldHMiOlsxXSwiaWF0IjoxNTg2ODY5MjcyfQ.lFy5UGAmDp7qcarXUrBG7K4mMJwCXal8on3UrLNQEHk';
    var worldTerrain = new Cesium.CesiumTerrainProvider({
      url: 'http://localhost:8081/terrain2'
  });
    
    viewer = new Cesium.Viewer('cesiumContainer', {
      animation:false,
      baseLayerPicker:false,
      fullscreenButton:false,
      geocoder:false,
      homeButton:false,
      infoBox:false,
      sceneModePicker:false,
      selectionIndicator:false,
      timeline:false,
      navigationHelpButton:false,
      navigationInstructionsInitiallyVisible:false,
      navigation: true,
      terrainProvider: worldTerrain,
      creditContainer: 'credit',
      imageryProvider: baseLayer
    });
    let rsLayer = new Cesium.ArcGisMapServerImageryProvider({
      url: baseUrl + '/底图/2020年6月影像/MapServer',
      usePreCachedTilesIfAvailable: false
    });
    viewer.imageryLayers.addImageryProvider(rsLayer);
    viewer.scene.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(114.345661, 23.040161, 10000.0)
    });

    /*let whiteStyle = new Cesium.Cesium3DTileStyle({
      color: "color('white', 0.5)",
      show: true
    });*/
    let white = new Cesium.Cesium3DTileset({
      url: 'http://172.16.217.116/white/tileset.json'
    });
    //white.style = whiteStyle;
    white.readyPromise.then(function () {
      viewer.scene.primitives.add(white);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>