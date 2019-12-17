// Helper to check if a row exist by ID and return a promise
// Read one, Update and Delete
const mustBeInArray = (array, id) => {
    // Promise accepts 2 arguments callbacks provided by JS
    // Resolve if the promise success with a result
    // Rejects if the error occur
    return new Promise((resolve, reject) => {
        // Row we check if exist the id in the array
        const row = array.find(r => r.id === id);
        if (!row) {
            // If not row then we reject and show an message and status 404
            reject({
                message: "ID is not found",
                status: "404"
            });
        }
        // Else we resolve the Promise result
        resolve(row);
    });
};

module.exports = {
    mustBeInArray
};
