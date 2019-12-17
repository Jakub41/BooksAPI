// Data Utilities
const f = require("../shared/utilities");

const filePath = f.booksJsonPath;

const h = require("../helpers/index.helper");

let books = require(h.readJson(filePath));

const getBooks = () => {
    return new Promise((resolve, reject) => {
        if (books.length === 0)
            reject({
                message: "No books available",
                status: 202
            });

        resolve(books).catch(err => reject(err));
    });
};
