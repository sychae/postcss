const path = require('path');
var merge = require('webpack-merge')
const cfg = require('./config');

const root = path.resolve(__dirname, '.');

const wwwrootDir = path.resolve(__dirname, cfg.wwwroot);
const srcRootDir = path.resolve(__dirname, cfg.srcRoot);
const tgtRootDir = path.resolve(__dirname, cfg.tgtRoot);
const fs = require('fs');
const sources = [];
const files = fs.readdirSync(srcRootDir);
for (var i=0; i<files.length; i++) {
    const item = files[i];
    if(item.endsWith(".scss") && !item.startsWith('_')){
        sources.push("./" + cfg.srcRoot + "/" + item);
    }  
}
const tempName = 'temp';
const tempDir = path.resolve(__dirname, './' + tempName);

module.exports = merge(
    cfg,
    {
        root,
        tempName,
        tempDir,
        wwwrootDir,
        srcRootDir,
        tgtRootDir,
        sources,
    }
);
