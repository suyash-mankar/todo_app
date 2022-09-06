const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'));



var tasks = [
    {
        description: "first task",
        category: "Personal",
        date: "06/09/2022"
    },
    {
        description: "second task",
        category: "Work",
        date: "07/09/2022"
    },
    {
        description: "third task",
        category: "School",
        date: "07/09/2022"
    }
]





app.get('/', function(req, res){
    return res.render('home', {
        title: 'TODO List',
        task_list: tasks
    });
})


app.post('/create-task', function(req,res){
    return res.end('<h1> task created successfully </h1>    ')
})


app.post('/delete-task', function(req,res){
    return res.end('<h1> task deleted successfully </h1>    ')
})

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`server is up and running on port: ${port}`);
})
