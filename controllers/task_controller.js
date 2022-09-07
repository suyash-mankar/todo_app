const Task = require('../models/task');

module.exports.createTask = function(req, res){

    let date = new Date(req.body.date).getDate();
	if (date < 10) {
		date = "0" + date;
	}
	const month = new Date(req.body.date).toLocaleString("default", {
		month: "short",
	});
	const year = new Date(req.body.date).getFullYear().toString().slice(-2);

    Task.create({

        description: req.body.description,
        category: req.body.category,
        date: `${date} ${month}, ${year}`

    }, function(err, newTask){
        if(err){
            console.log('error in creating a task', err);
            return;
        }
        return res.redirect('back'); 
    });
}


module.exports.deleteTask = function(req,res){
    var id = req.query.id;
    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object in db');
            return;
        }
    });
}

module.exports.pageRefresh = function(req,res){
    return res.redirect('back');
}