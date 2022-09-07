const Task = require('../models/task');

module.exports.createTask = function(req, res){

    let dateVal;

    if(req.body.date == ""){
        dateVal = "NO DEADLINE";
    }
    else{
        let date = new Date(req.body.date).getDate();
        if (date < 10) {
            date = "0" + date;
        }
    
        let month = new Date(req.body.date).toLocaleString("default", {
            month: "short",
        });
        
        let year = new Date(req.body.date).getFullYear().toString().slice(-2);  
        
        dateVal = `${month} ${date}, ${year}`;

    }


    Task.create({

        description: req.body.description,
        category: req.body.category,
        date: dateVal

    }, function(err, newTask){
        if(err){
            console.log('error in creating a task', err);
            return;
        }
        return res.redirect('back'); 
    });
}


module.exports.updateTask = (req, res) =>{
    
    let id = req.query.id;
	let completed = req.query.completed;    

	Task.findByIdAndUpdate(id, { completed: completed }, (err) => {
		if (err) {
			console.log("Error in Updating the Task");
			return;
		}
		// console.log("Task Updated");
		return res.redirect("back");
	});
}





module.exports.deleteTask = function(req,res){

    Task.deleteMany({ completed: true }, (err) => {
        if (err) {
            console.log("Error in Deleting the Task");
            return;
        }
        // console.log("Task Deleted");
        return res.redirect("back");
    });
}

