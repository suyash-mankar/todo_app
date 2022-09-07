const express = require('express');

const db = require('./config/mongoose');
const Task = require('./models/task');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('assets'));


app.get('/', function(req, res){

    Task.find({}, function(err, tasks){
        if(err){
            console.log('error in fetching contacts from db');
            return;
        }
        return res.render('home', {
            title: 'TODO List',
            task_list: tasks
        });
    })   
})


app.post('/create-task', function(req,res){

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
    
})


app.get('/delete-task', function(req,res){
    
    var id = req.query.id;
    Task.findByIdAndDelete(id, function(err){
        if(err){
            console.log('error in deleting an object in db');
            return;
        }
    });
})


app.post('/delete-task', function(req,res){

    return res.redirect('back');
        
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`server is up and running on port: ${port}`);
})
