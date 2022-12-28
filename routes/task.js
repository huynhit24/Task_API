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

// Fetch all todos ascending
//mehod  GET
router.get('/ascsort', auth, taskController.getAllTasksAscSorted);

// Fetch all todos descending
//mehod  GET
router.get('/descsort', auth, taskController.getAllTasksDescSorted);

// Fetch all todos of finished: true
//mehod  GET
router.get('/finished', auth, taskController.getAllTasksFinished);

// Fetch all todos of finished: true
//mehod  GET
router.get('/search', auth, taskController.getAllTasksByTextSearch);

// Update a task 
// method PUT
router.put('/:id', taskController.updateTask);

// Delete a task todo
// method Delete
router.delete('/:id', taskController.deleteTask);


module.exports = router;