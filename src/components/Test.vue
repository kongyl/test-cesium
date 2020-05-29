<template>
  <div id="cesiumContainer">
    <div id="credit" hidden></div>
  </div>  
</template>

<script>
require('cesium/Widgets/widgets.css');
let Cesium = require('cesium/Cesium');

export default {
  name: 'Test',
  data() {
    return {
      viewer: null
    }
  },
  mounted() {
    var baseLayer = new Cesium.TileMapServiceImageryProvider({
      url: Cesium.buildModuleUrl('Assets/Textures/NaturalEarthII')
    });
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ODNjMmQ2Mi1hMTBlLTQxM2YtODBkMS1iM2MzNmY3OTFkZmYiLCJpZCI6NDAwNiwic2NvcGVzIjpbImFzciJdLCJhc3NldHMiOlsxXSwiaWF0IjoxNTg2ODY5MjcyfQ.lFy5UGAmDp7qcarXUrBG7K4mMJwCXal8on3UrLNQEHk';
    this.viewer = new Cesium.Viewer('cesiumContainer', {
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
      terrainProvider: Cesium.createWorldTerrain(),
      creditContainer: 'credit',
      imageryProvider: baseLayer
    });
    var rsLayer = new Cesium.ArcGisMapServerImageryProvider({
      url: 'http://28h413242y.wicp.vip/arcgis/rest/services/仲恺/MapServer',
      usePreCachedTilesIfAvailable: false
    });
    this.viewer.imageryLayers.addImageryProvider(rsLayer);
    this.viewer.scene.camera.setView({
      destination: Cesium.Cartesian3.fromDegrees(114.345661, 23.040161, 10000.0)
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
