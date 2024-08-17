// console.log(__filename)

const myPath = require("path");

const myCurrentPath = __filename;
const myDir = __dirname;

// console.log(myPath)

console.log(myPath.basename(myCurrentPath));
console.log(myPath.basename(__dirname));

console.log(myPath.extname(myCurrentPath));

let pathObj = {
dir: 'usr/local',
name: 'testfile',
ext: '.js'

}
console.log(myPath.format(pathObj))
console.log(myPath.isAbsolute(myCurrentPath))
//console.log(myPath.isAbsolute('./2.5 Import Module.js'))

console.log(myPath.join('/foo','bar', 'gh','etc'))

console.log(myPath.resolve(__dirname, 'scripts', 'testfile.js'))

console.log(myPath.parse(myCurrentPath))