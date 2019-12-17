const { validateRules } = require("./validator.middleware");
const { newBookRules } = require("./bookFieldsvalidator.middleware");

module.exports = {
    rules: validateRules,
    createBook: newBookRules
}
