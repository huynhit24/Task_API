const express = require('express');
const router = express.Router();
const auth = require('../middleware/verifyToken');
const taskController = require('../controllers/taskController');

// Create new todo task
// method POST
router.post('/', auth, taskController.createTask);

// Fetch all todos
//mehod  GET
router.get('/', auth, taskController.getAllTasks);

// Fetch all todos of finished: true
//mehod  GET
router.get('/finished', auth, taskController.getAllTasksFinished);

// Update a task 
// method PUT
router.put('/:id', taskController.updateTask);

// Delete a task todo
// method Delete
router.delete('/:id', taskController.deleteTask);
module.exports = router;