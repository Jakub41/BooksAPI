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
        // Result the all Books
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

// GET book
router.get("/:asin", check.rules, async (req, res) => {
    const id = req.params.asin;
    await book
        .getBook(id)
        .then(book => res.json(book))
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            } else {
                res.status(500).json({ message: err.message });
            }
        });
});

// POST new Book
router.post("/", check.createBook, check.rules, async (req, res) => {
    // Book
    const books = await book.getBooks();
    const asinCheck = books.find(x => x.asin === req.body.asin);
    if (asinCheck)
        //if there is one, just abort the operation
        res.status(500).send("ASIN should be unique");

    // We create a new date time with helper
    book
        // Using the model to create a Book
        .createBook(req.body)
        .then(data =>
            // OK product is created
            res.status(201).json({
                message: `The Book #${data.asin} has been created`,
                content: data
            })
        )
        // Error product not created
        .catch(err => res.status(500).json({ message: err.message }));
});

// PUT Update a book
router.put("/:asin", check.updateBook, check.rules, async (req, res) => {
    // Request ID
    const asin = req.params.asin;
    // Await the book
    await book
        // Call model to update the product
        .updateBook(asin, req.body)
        // Response a message
        .then(book =>
            res.json({
                message: `The book #${asin} has been updated`,
                content: book
            })
        )
        // Errors if any
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            }
            res.status(500).json({ message: err.message });
        });
});

// DELETE a Book
router.delete("/:asin", check.rules, async (req, res) => {
    const asin = req.params.asin;
    // Await server
    await book
        // Model delete product
        .deleteBook(asin)
        .then(book =>
            // Response
            res.json({
                message: `The book #${asin} has been deleted`
            })
        )
        // Any error
        .catch(err => {
            if (err.status) {
                res.status(err.status).json({ message: err.message });
            }
            res.status(500).json({ message: err.message });
        });
});


// Routes
module.exports = router;
