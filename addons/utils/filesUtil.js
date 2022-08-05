const fs = require('fs');
const path = require('path');

function getFilesFromFolder(dir, filter="") {
    let files = [];

    fs.readdirSync(dir)
    .forEach(file => {
        const absolutePath = path.join(dir, file);
        const isDirectory = fs.statSync(absolutePath).isDirectory();

        if (!isDirectory && !file.endsWith(filter)) return;

        files.push(isDirectory ? getFilesFromFolder(absolutePath) : absolutePath);
    })

    return files;
}

module.exports = {
    getFilesFromFolder
}