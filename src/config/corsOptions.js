const whiteList = ["http://localhost:3000", process.env.FE_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if (whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    }
};

module.exports = {
    corsOptions
}
