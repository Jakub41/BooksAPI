// UUID lib
const uuidv4 = require("uuid/v4");

// Helper to set a random UUID
const getNewId = () => {
    return uuidv4();
};

module.exports = {
    getNewId
};
