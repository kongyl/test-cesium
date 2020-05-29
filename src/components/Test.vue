<template>
  <div id="cesiumContainer"></div>
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
    this.viewer = new Cesium.Viewer('cesiumContainer');
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
