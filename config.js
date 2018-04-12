const wwwroot = "wwwroot";
const srcRoot = "wwwroot/postcss";
const tgtRoot = "wwwroot/css";

const host = '192.168.100.4';
const port = '9080';
/*
const browsers = [
    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 24",
    "Explorer >= 8",
    "iOS >= 6",
    "Opera >= 12",
    "Safari >= 6"
];
*/

const browsers = [
    "> 1%",
    "last 2 versions",
    "Explorer >= 8",
    "Opera >= 12",
];



module.exports = {
    wwwroot,
    srcRoot,
    tgtRoot,
    host,
    port,
    browsers,
};

