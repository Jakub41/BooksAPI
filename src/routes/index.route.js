// Config
const url = require("../config/config");
// Express Lib
const express = require("express");
// Routes lib
const router = express.Router();

// Defining the Index Router for Books
router.use(url.BASE_URL, require("./books.route"));

// Exporting the Index Router
module.exports = router;
