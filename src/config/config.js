require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    BASE_URL: process.env.BOOKS,
    DB_BOOKS: process.env.JSON_BOOKS,
};
