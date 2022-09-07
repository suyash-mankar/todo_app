//Require the Task Model
const Task = require('../models/task');
//Export the Home Controller's home() Function
module.exports.home = function(req, res){
    //Find everything in Task collection
    Task.find({}, function(err, tasks){
        if(err){
            console.log('error in fetching contacts from db');
            return;
        }
        //Render the home page
        return res.render('home', {
            //Context
            title: 'TODO List',
            task_list: tasks
        });
    })

}