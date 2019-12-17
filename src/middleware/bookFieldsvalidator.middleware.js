// Adding body module of express validator
const { check, sanitizeBody } = require("express-validator");

// POST Book fields validations
const newBookRules = [
    check("asin")
        .exists()
        .withMessage("You should specify the asin"),
    check("title")
        .exists()
        .withMessage("Title is required"),
    check("category")
        .exists()
        .withMessage("Category is required"),
    check("price")
        .isNumeric()
        .withMessage("Price should be a number"),
    check("img")
        .exists()
        .withMessage("Img is required"),
    sanitizeBody("price").toFloat()
];

// PUT Book fields validations
const updateBookRules = [];

// Exports the required methods
module.exports = {
    newBookRules,
    updateBookRules
};
