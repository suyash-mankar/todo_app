const express = require('express');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'));


app.get('/', function(req, res){
    return res.render('home', {
        title: 'TODO List'
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
