const { validateRules } = require("./validator.middleware");
const {
    newBookRules,
    updateBookRules
} = require("./bookFieldsvalidator.middleware");

module.exports = {
    rules: validateRules,
    createBook: newBookRules,
    updateBook: updateBookRules
};
