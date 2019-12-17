const { mustBeInArray } = require("./array.helper");
const { newDate } = require("./dateTime.helper");
const { writeToJSON, readFromJSON } = require("./fs.helper");
const { getNewId } = require("./uuid.helper");

module.exports = {
    inArray: mustBeInArray,
    dateTime: newDate,
    writeJson: writeToJSON,
    readJson: readFromJSON,
    id: getNewId
};
