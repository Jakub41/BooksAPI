//Path
const path = require("path");
// Data Utilities
const f = require("../shared/utilities");

const filePath = path.join(__dirname, "../db", f.booksJsonPath);

let books = require(filePath);

const h = require("../helpers/index.helper");

// GET Books
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

// GET Book
const getBook = asin => {
    return new Promise((resolve, reject) => {
        // We use the helper to check the data is present in the array
        h.inArray(books, asin)
            .then(book => resolve(book))
            .catch(err => reject(err));
    });
};

// POST new Book
const createBook = newBook => {
    return new Promise((resolve, reject) => {
        const date = {
            created_at: h.dateTime(),
            updated_at: h.dateTime()
        };
        // We build our query
        newProduct = { ...date, ...newBook };
        // We add t the array
        books.push(newBook);
        // Helper write to JSON the data to file
        h.writeJson(filePath, books);
        // Resolve if ok Reject with error if wrong
        resolve(newBook).catch(err => reject(err));
    });
};

module.exports = {
    getBooks,
    getBook,
    createBook
};
