const path = require('path');
const webpack = require('webpack');
const CopywebpackPlugin = require('copy-webpack-plugin');
const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = {
  configureWebpack: {
    output: {
      sourcePrefix: ''
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        cesium: path.resolve(__dirname, cesiumSource)
      }
    },
    node: {
      fs: 'empty'
    },
    module: {
      unknownContextCritical: false
    },
    plugins: [
      new CopywebpackPlugin({ 
        patterns: [
          { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
          { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
          { from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers' }
        ]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('')
      })
    ]
  }
};