//Require the existing Express
const express = require('express');
//Create a Local Router
const router = express.Router();
//Require Home Controller
const homeController = require('../controllers/home_controller');
//Access the Home Controller's home() Function by '/' route
router.get('/', homeController.home);
//Require './tasks' for '/tasks' requests
router.use('/tasks', require('./tasks'));

//Export the Router
module.exports = router;