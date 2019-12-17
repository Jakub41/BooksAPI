// Configuration of the APP
const config = require("../config/config")
// Books file JSON
const booksJsonPath = path.join(__dirname, config.DB_BOOKS)

module.exports = {
    booksJsonPath
}
