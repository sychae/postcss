const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const cfg = require('./webpack.config');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.PUBLIC_URL = ".";

module.exports = {
    entry: cfg.sources,
    output: {
        path: cfg.root,
        filename: "./temp/main.js"
    },
    module: {
        rules: [
            {
              test: /\.scss$/,

              use: [
                {
                  loader: 'file-loader',
                  options: {
                    name: '[name].css',
                    outputPath: cfg.tgtRoot
                  }
                },
                {
                  loader: 'extract-loader'
                },
                {
                  loader: 'css-loader',
                  options: { 
                    importLoaders: 1,
                    url: false,
                    minimize: process.env.NODE_ENV === 'production',
                  }
                },
                'postcss-loader'
              ]

/*
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                      loader: 'css-loader',
                      options: { 
                        importLoaders: 1,
                        url: false,
                      }
                    },
                    'postcss-loader'
                  ]
              }),
*/
            },

/*
            {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              use: [
                {
                  loader: 'file-loader',
                  options: {
                    emitFile: false,
                    name: '[path]/[name].[ext]',
                    useRelativePath: true,
 //                   outputPath: './images',
 //                   publicPath: '.',
                  }  
                }          
              ]
            },
*/
          ]
    },
    plugins: [
      new ExtractTextPlugin(cfg.tgtRoot + '/[name].css'),
/*
        new ExtractTextPlugin({ 
              filename: cfg.tgtRoot + '/[name].css',
              allChunks: true,
          }), 
*/
    ]
}
