// Global Object --> nodeJS
// console.log(global);

// Processs represent current nodejs process
// console.log(process);

// console.log('current filename', __filename);

// console.log('current directory', __dirname);
// ************************global variable end*************

// const path = require('path');
// const fileExt = path.extname(__filename);
// const directoryName = path.dirname(__dirname);
// const fileName = path.basename(__filename);

// console.log(`'fileExt',${fileExt}
// 'directoryName', ${directoryName}
// 'fileName', ${fileName}`);

/**
 * code directory -> 16 folders -> lecture 1 to 16
 */

const fs = require('fs');
const path = require('path');

const targetPath = path.dirname(__dirname);
console.log(targetPath);

for (let i = 1; i <= 16; i++) {
    const finalPathofDir = path.join(targetPath, `Lecture${i}`);
    // creating a directory-> check if it is available or not nodejs fs
    if (fs.existsSync(finalPathofDir)){
        console.log(`Lecture${i} folder ALREADY Exist`);
    }
    else {
        fs.mkdirSync(finalPathofDir);
        console.log(`Lecture${i} folder created`);
    }

}

// https://robotjs.io/      : To automate the desktop
