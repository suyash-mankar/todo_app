//Require the Mongoose Library
const mongoose = require('mongoose');
//Connect Mongoose to MongoDB server
mongoose.connect('mongodb://localhost:27017/todo_list_db');
//Connect database to Mongoose
const db = mongoose.connection;

//Check if the connection is successful
db.on('error', console.error.bind(console, 'error connecting to db'));

db.once('open', function(){
    console.log('successfully connected to the database');
})