require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    BASE_URL: process.env.BOOKS_API,
    DB_BOOKS: process.env.JSON_BOOKS,
};
