const path = require('path');
const cfg = require("./webpack.config");

const loadPaths = [];
for(var i = 0; i<cfg.assetPaths.length; i++){
    loadPaths[i] = path.resolve(__dirname, cfg.assetPaths[i]);
}

module.exports = (ctx) => {

    // const assetsBasePath = cfg.bABSURL?cfg.wwwrootDir:'';
    // const importRoot = cfg.bABSURL?cfg.wwwrootDir:'';


    // console.log('******************************postcss.config.js', __dirname, loadPaths);

    return {
        parser: false,
        map: ctx.env === 'development' ? true : false,
        plugins:{
			'postcss-assets' : {
                basePath: cfg.wwwrootDir,
                relative: cfg.bRelative,
                loadPaths: loadPaths,
			},
            'postcss-import': {
                // root: importRoot,
            },
            'postcss-node-sass' : {

            },
            'autoprefixer': {
                add: true,
                browsers: cfg.browsers,
            },
        }
    };
}