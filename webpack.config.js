const path = require('path');
var merge = require('webpack-merge')
const cfg = require('./config');

const root = path.resolve(__dirname, '.');

const wwwrootDir = path.resolve(__dirname, cfg.wwwroot);
// const tgtRootDir = path.resolve(__dirname, cfg.tgtRoot);
const fs = require('fs');
const sources = [];


function _readDir(dir, sources){
    const files = fs.readdirSync(dir);
    for (var i=0; i<files.length; i++) {
        const item = files[i];
        const absPath = path.resolve(dir,item);



        // console.log(dir, __dirname, item, absPath, absPath.indexOf(__dirname) );

        const stat = fs.lstatSync(absPath);
        // console.log(item, stat.isDirectory(), stat.isFile());
        if(stat.isDirectory()){
            _readDir(absPath, sources);
        }else if(stat.isFile() && item.endsWith(".scss") && !item.startsWith('_')){
            sources.push(absPath);
        }
    }
}
_readDir(wwwrootDir, sources);
console.log(sources);

module.exports = merge(
    cfg,
    {
        root,
        wwwrootDir,
        sources,
    }
);
