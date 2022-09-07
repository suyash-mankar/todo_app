//Create the same instance of mongoose which is used in the MongoDB configuration inside config
const mongoose = require('mongoose');

//Create the DB Schema
const taskSchema = new mongoose.Schema({

    description: {
        type: String,
    },
    category: {
        type: String
    },
    date: {
        type: String
    },
    //To check if the task is completed or not
    completed: {
        type: Boolean,
        default: false,
    },

});

//Create a Model/Collection to populate the data with the same name for the schema in the DB
const Task = mongoose.model('Task', taskSchema);

//Export the Model/Collection
module.exports = Task;