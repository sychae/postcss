/*

const path = require('path');
const cfg = require("./webpack.config");
*/

const cfg = require("./webpack.config");
module.exports = (ctx) => {
    /*
    const file = ctx.file;

    const basename = file.basename;
    const dirname = file.dirname;

    const from = path.resolve(dirname, basename);

    let toname = basename;
    if(toname.endsWith(".scss")) toname = toname.substring(0, toname.length - 4) + "css";
    const to = path.resolve(cfg.tgtRoot, toname);
    */


    return {
        parser: false,
        map: ctx.env === 'development' ? true : false,
        plugins:{
			'postcss-assets' : {
				basePath: ctx.file.dirname,
				baseUrl: './'
			},
            'postcss-import': {
                root: ctx.file.dirname
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