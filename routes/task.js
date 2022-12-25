const express = require('express');
const router = express.Router();
const auth = require('../middleware/verifyToken');
const taskController = require('../controllers/taskController');

// desc    Create new todo task
// method POST
router.post('/', auth, taskController.createTask);

//desc   Fetch all todos
//mehod  GET
router.get('/', auth, taskController.getAllTasks);

//desc   Fetch all todos of finished: true
//mehod  GET
router.get('/finished', auth, taskController.getAllTasksFinished);

// desc   Update a task 
// method PUT
router.put('/:id', taskController.updateTask);

// desc Delete a task todo
// method Delete
router.delete('/:id', taskController.deleteTask);
module.exports = router;