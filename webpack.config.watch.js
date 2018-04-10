const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const cfg = require('./webpack.config')

process.env.NODE_ENV = 'development';

const baseConfig = require('./webpack.config.base')
const buildConfig = merge(baseConfig, {
  optimization: {
    minimize: false,
  },
});

//console.log("buildConfig", buildConfig.optimization.minimize);

module.exports = buildConfig;