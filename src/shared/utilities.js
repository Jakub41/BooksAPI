// Configuration of the APP
const config = require("../config/config");
//Path
const path = require("path");
// Books file JSON
const booksJsonPath = path.join(__dirname, config.DB_BOOKS);

module.exports = {
    booksJsonPath
};
