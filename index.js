// Env variables from config.js
const { PORT } = require("./src/config/config");

// Express lib
const express = require("express");

// Body parser lib
const bodyParser = require("body-parser");

// CORS lib
const cors = require("cors");

// Morgan lib logger middleware https://www.npmjs.com/package/morgan
// To log app activities a good way to keep track of what is going on
// Useful also to the debug issues when an exception come ups
const morgan = require("morgan");

// Defining the server/app
const server = express();

// List routes
const listEndpoints = require("express-list-endpoints");

// Using CORS
server.use(cors());

// We use Morgan to log our server
// "tiny" The minimal output of the log the default light param
server.use(morgan("tiny"));

// Returns middleware that only parses json
server.use(express.json());

// Express urlencoded
// Returns middleware that only parses urlencoded with the QueryString module
/**
 * You NEED express.json() and express.urlencoded()
 * for POST and PUT requests,
 * because in both these requests you are sending data (in the form of some data object)
 * to the server and you are asking the server to accept or store that data (object),
 * which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
 *
 */
server.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Main Routing
server.use(require("./src/routes/index.route"));

// Endpoints list
console.log(listEndpoints(server));

// Starting the server on env port
server.listen(`${PORT}` || 4000, () => {
  // Showing a message to the console informing on which port is running
  console.log(`Server is running on port ${PORT}`);
});
