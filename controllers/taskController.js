const Task = require('../models/Task');

const taskController = {
    createTask: async (req, res, next) => {
        try {
            const toDo = await Task.create({ title: req.body.title, description: req.body.description, user: req.user.id});
            if(!toDo) {
                return res.status(400).json({
                    success: false,
                    msg: 'Something went wrong'
                });
            }
    
            res.status(200).json({
                success: true,
                todo: toDo,
                msg: 'Successfully created.'
            });
        } catch (error) {
            next(error);
        }
    },

    getAllTasks: async(req, res, next) => {
        try {
            const todo = await Task.find({user: req.user.id, finished: false});
    
            if(!todo) {
                return res.status(400).json({ success: false, msg: 'Something error happened'});
            }
    
            res.status(200).json({ success: true, count: todo.length, todos: todo, msg: 'Successfully fetched'})
        } catch (error) {
            next(error);
        }
    },

    getAllTasksFinished: async(req, res, next) => {
        try {
            const todo = await Task.find({user: req.user.id, finished: true});
    
            if(!todo) {
                return res.status(400).json({ success: false, msg: 'Something error happened'});
            }
    
            res.status(200).json({ success: true, count: todo.length, todos: todo, msg: 'Successfully fetched'})
        } catch (error) {
            next(error);
        }
    },

    updateTask: async (req, res, next) => {
        try {
            let toDo = await Task.findById(req.params.id);
            if(!toDo) {
                return res.status(400).json({ success: false, msg: 'Task Task not exits' });
            }
    
            toDo = await Task.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
    
            res.status(200).json({ success: true,todo: toDo, msg: 'Successfully updated' });
            
        } catch (error) {
            next(error);
        }
    },

    deleteTask: async (req, res, next) => {
        try {
            let toDo = await Task.findById(req.params.id);
            if(!toDo) {
                return res.status(400).json({ success: false, msg: 'Task Task not exits' });
            }
        
            toDo = await Task.findByIdAndDelete(req.params.id);
        
            res.status(200).json({
                success: true, msg: 'Successfully Deleted task.'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = taskController;