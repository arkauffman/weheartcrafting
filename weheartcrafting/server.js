const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(logger('dev'));

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.json());
//app.use(require('./config/auth'));


// Put API routes here, before the "catch all" route
app.use('/api/items', require('./routes/api/items.js'));
app.use('/api/static', require('./routes/api/static.js'));


// The following "catch all" route is necessary for
// a SPA'sclient-side routing to properly work
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
