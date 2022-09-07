//Require the existing Express
const express = require('express');
//Create a Local Router
const router = express.Router();
//Require Task Controller
const taskController = require('../controllers/task_controller');
//Access the Tasks Controller's createTask() Function by '/create' route
router.post('/create', taskController.createTask);
//Access the Tasks Controller's deleteTask() Function by '/delete' route
router.post('/delete', taskController.deleteTask);
//Access the Tasks Controller's updateTask() Function by '/update' route
router.get('/update', taskController.updateTask);

//Export the Router
module.exports = router;