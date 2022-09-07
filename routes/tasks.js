const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task_controller');

router.post('/create', taskController.createTask);
router.get('/delete', taskController.deleteTask);
router.post('/delete', taskController.pageRefresh);

module.exports = router;