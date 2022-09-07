//----------------------------------------------------------------//
//Main Entry Point of the Express Server App//
//----------------------------------------------------------------//
//Require Express Module for running the Express Server
const express = require('express');
//Require mongoose
const db = require('./config/mongoose');
//Create Express App for Request-Response Cycle & to create the Express Server
const app = express();
//Create Port
const port = 8000;
//Requrie body-parser to parse the data from the form
const bodyParser = require('body-parser');
//Set up the view engine as ejs
app.set('view engine', 'ejs');
//Set up the directory for views folder
app.set('views', './views');
//Body-parser middleware
app.use(bodyParser.urlencoded({extended: false}));
//set up folder for static files
app.use(express.static('assets'));
//Requires the index.js - Route File, from the Routes Folder
app.use('/', require('./routes'));


//Run the ExpressJS Server
app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`server is up and running on port: ${port}`);
})
