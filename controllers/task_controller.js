//Require the Task Model
const Task = require('../models/task');

//Export the Home Controller's createTask() Function
module.exports.createTask = function(req, res){

    let dateVal;
    //Set date value as "NO DEADLINE" if the user doesn't input the due date
    if(req.body.date == ""){
        dateVal = "NO DEADLINE";
    }
    else{

        //Convert the date format
        let date = new Date(req.body.date).getDate();
        if (date < 10) {
            date = "0" + date;
        }
    
        let month = new Date(req.body.date).toLocaleString("default", {
            month: "short",
        });
        
        let year = new Date(req.body.date).getFullYear().toString().slice(-2);  
        
        //Date value in M d, y format
        dateVal = `${month} ${date}, ${year}`;

    }

    //Create a document in the collection
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

//Export the Home Controller's updateTask() Function
module.exports.updateTask = (req, res) =>{
    
    //Get the value of id from the query
    let id = req.query.id;

    //Get the value of completed from the query
	let completed = req.query.completed;    

    //Find the document by id and update the 'completed' field
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

