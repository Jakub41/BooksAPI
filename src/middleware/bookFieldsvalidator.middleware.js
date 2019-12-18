// Adding body module of express validator
const { check, sanitizeBody } = require("express-validator");

// POST Book fields validations
const newBookRules = () => {
    return [
        check("asin")
            .notEmpty()
            .withMessage("You should specify the asin"),
        check("title")
            .notEmpty()
            .withMessage("The Title name is required"),
        check("category")
            .notEmpty()
            .withMessage("Category is required"),
        check("price")
            .isNumeric()
            .withMessage("Price should be a number"),
        check("img")
            .notEmpty()
            .withMessage("Img is required"),
        sanitizeBody("price").toFloat()
    ];
};
// PUT Book fields validations
const updateBookRules = () => {
    return [
        check("title")
            .notEmpty()
            .optional()
            .withMessage("Title is empty"),
        check("category")
            .notEmpty()
            .optional()
            .withMessage("Category is required"),
        check("price")
            .isNumeric()
            .notEmpty()
            .optional()
            .withMessage("Price should be a number"),
        check("img")
            .notEmpty()
            .optional()
            .withMessage("Img is required"),
        sanitizeBody("price").toFloat()
    ];
};

// Exports the required methods
module.exports = {
    newBookRules,
    updateBookRules
};
