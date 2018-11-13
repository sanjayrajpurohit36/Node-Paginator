// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var Schema     = require('./app/models/data.model');
const mongoose = require('mongoose');
var cors = require('cors'); //Requiring cross origin resourse sharing
app.use(cors()); // Enabling cors service
const dbConfig = require('./config/dbconfig.js');
var morgan = require('morgan');
const paginate = require('express-paginate');

mongoose.Promise = global.Promise;
//Connecting to DB
mongoose.connect(dbConfig.URL);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan(':url :response-time ms'));				// Using morgan to check request time
var port = process.env.PORT || 8000;        // set our port
// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

MongoClient.connect(dbConfig.URL, function(err, db) {
    if (err) throw err;
    app.db =  db;
	require('./app/routes/index')(router, app.db);
})	

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);