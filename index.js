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

    Task.create(req.body, function(err, newTask){
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
