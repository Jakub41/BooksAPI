// Express Validator modules
const { matchedData, validationResult } = require("express-validator");

// General rules of Express Validator with errors mapping
const validateRules = (req, res, next) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        req.matchedData = matchedData(req);
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
};

module.exports = {
    validateRules,
};
