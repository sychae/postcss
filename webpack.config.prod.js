var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
process.env.NODE_ENV = 'production';

var baseConfig = require('./webpack.config.base')

var buildConfig = merge(baseConfig, {
  optimization: {
    minimize: false,
  },
});

//console.log("buildConfig", buildConfig.optimization.minimize);

module.exports = buildConfig;