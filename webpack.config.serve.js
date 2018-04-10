const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const cfg = require('./config');

module.exports = {
    entry: [
        './temp.js'
    ],
    output: {
        path: cfg.root,
        filename: "./temp/main.js"
    },
    optimization: {
        minimize: false,
    },
    devServer: {
        host: cfg.host,
        port: cfg.port,
        contentBase: './' + cfg.wwwroot
    },
};

