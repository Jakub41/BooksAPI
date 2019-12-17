//Path
const path = require("path");
// Data Utilities
const f = require("../shared/utilities");

const filePath = path.join(__dirname, "../db", f.booksJsonPath);

let books = require(filePath);

const h = require("../helpers/index.helper");

const getBooks = () => {
    return new Promise((resolve, reject) => {
        // Check if w have any products data
        if (books.length === 0) {
            reject({
                message: "no books available",
                status: 202
            });
        }
        resolve(books).catch(err => reject(err));
    });

};

module.exports = {
    getBooks
};
