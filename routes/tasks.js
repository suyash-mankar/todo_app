const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task_controller');

router.post('/create', taskController.createTask);
router.post('/delete', taskController.deleteTask);
router.get('/update', taskController.updateTask);

module.exports = router;