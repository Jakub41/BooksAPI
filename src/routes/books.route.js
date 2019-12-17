// Express
const express = require("express");
// Router
const router = express.Router();
// Product model
const book = require("../models/book.model");
// Validations middleware
const check = require("../middleware/index.middleware");

// GET all books
router.get("/", check.rules, async (req, res) => {
    // Await response server
    await book
        .getBooks()
        // Result the all Products
        .then(books => res.json(books))
        // If any errors
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            } else {
                res.status(500).json({ message: err.message });
            }
        });
});

// Routes
module.exports = router;
