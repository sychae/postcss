const wwwroot = "wwwroot";
const host = '127.0.0.1';
const port = '9080';

const bRelative = false;

const assetPaths = [
    'wwwroot/content/kdmtlib',
    'wwwroot/content/kdmtlib/images',
    'wwwroot/content/kdmtlib/font',
];


const browsers = [
    "> 1%",
    "last 2 versions",
    "Explorer >= 8",
    "Opera >= 12",
];

module.exports = {
    wwwroot,
    host,
    port,
    bRelative,
    assetPaths,
    browsers,
};

