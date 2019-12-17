//Path
const path = require("path");
// Data Utilities
const f = require("../shared/utilities");

const filePath = path.join(__dirname, f.booksJsonPath);

let books = require(filePath);

const h = require("../helpers/index.helper");

const getBooks = () => {
    const buffer = h.readJson(books);
    JSON.parse(buffer.toString());
};

module.exports = {
    getBooks
};
