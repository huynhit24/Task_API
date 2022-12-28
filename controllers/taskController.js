const Task = require('../models/Task');
const moment = require('moment');

const taskController = {

    //create a task
    createTask: async (req, res, next) => {
        try {
            const dateString = req.body.duedateAt;
            const dateMomentObject = moment(dateString, "DD/MM/YYYY");
            const task = await Task.create({ title: req.body.title, description: req.body.description, user: req.user.id, duedateAt: dateMomentObject.toDate()});
            if(!task) {
                return res.status(400).json({
                    success: false,
                    msg: 'Something went wrong!'
                });
            }
    
            res.status(200).json({
                success: true,
                task: task,
                msg: 'Successfully created!'
            });
        } catch (error) {
            next(error);
        }
    },

    //get all tasks
    getAllTasks: async(req, res, next) => {
        try {
            const task = await Task.find({user: req.user.id, finished: false});
    
            if(!task) {
                return res.status(400).json({ success: false, msg: 'Something error happened!'});
            }
    
            res.status(200).json({ success: true, count: task.length, tasks: task, msg: 'Successfully fetched!'})
        } catch (error) {
            next(error);
        }
    },

    //get all tasks was sorted ascending
    getAllTasksAscSorted: async(req, res, next) => {
        try {
            const task = await Task.find({user: req.user.id, finished: false}).sort({createdAt: 1});
    
            if(!task) {
                return res.status(400).json({ success: false, msg: 'Something error happened!'});
            }
    
            res.status(200).json({ success: true, count: task.length, tasks: task, msg: 'Successfully fetched!'})
        } catch (error) {
            next(error);
        }
    },

    //get all tasks was sorted descending
    getAllTasksDescSorted: async(req, res, next) => {
        try {
            const task = await Task.find({user: req.user.id, finished: false}).sort({createdAt: -1});
    
            if(!task) {
                return res.status(400).json({ success: false, msg: 'Something error happened!'});
            }
    
            res.status(200).json({ success: true, count: task.length, tasks: task, msg: 'Successfully fetched!'})
        } catch (error) {
            next(error);
        }
    },

    //get all tasks finished
    getAllTasksFinished: async(req, res, next) => {
        try {
            const task = await Task.find({user: req.user.id, finished: true});
    
            if(!task) {
                return res.status(400).json({ success: false, msg: 'Something error happened!'});
            }
    
            res.status(200).json({ success: true, count: task.length, tasks: task, msg: 'Successfully fetched!'})
        } catch (error) {
            next(error);
        }
    },

    //update a task
    updateTask: async (req, res, next) => {
        try {
            let task = await Task.findById(req.params.id);
            if(!task) {
                return res.status(400).json({ success: false, msg: 'Task not exists!' });
            }
    
            task = await Task.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
    
            res.status(200).json({ success: true,task: task, msg: 'Successfully updated!' });
            
        } catch (error) {
            next(error);
        }
    },

    //delete a task
    deleteTask: async (req, res, next) => {
        try {
            let task = await Task.findById(req.params.id);
            if(!task) {
                return res.status(400).json({ success: false, msg: 'Task not exists!' });
            }
        
            task = await Task.findByIdAndDelete(req.params.id);
        
            res.status(200).json({
                success: true, msg: 'Successfully deleted task!'
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = taskController;