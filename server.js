// Include external library services
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Include local application middleware definitions
const minionsRouter = require('./server/minions');
const ideasRouter = require('./server/ideas');
const meetingsRouter = require('./server/meetings');

// Set Constant variables
const app = express();
const PORT = process.env.PORT || 4001;

module.exports = app;  // I don't know what this does

// Load externally sourced middleware functions 
app.use(cors());
app.use(bodyParser.json());

// Load local application middleware functions, specify the
// routes that will be assigned to these functions
app.use('/api/minions', minionsRouter);
app.use('/api/ideas', ideasRouter);
app.use('/api/meetings', meetingsRouter);

// This conditional is here for testing purposes:
if (!module.parent) {
    // Add your code to start the server listening at PORT below:
    app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}