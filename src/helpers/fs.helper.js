// File System Lib
const fs = require("fs-extra");

// Helper to write a JSON file
const writeToJSON = (filename, content) => {
    fs.writeFile(filename, JSON.stringify(content), "utf8", err => {
        if (err) console.log("Writing the file caused an error => ", err);
    });
};

// Helper to read a JSON file
const readFromJSON = filename => {
    fs.readFile(filename, err => {
        if (err) console.log("reading the file caused an error => ", err);
    });
};

module.exports = {
    writeToJSON,
    readFromJSON
};
