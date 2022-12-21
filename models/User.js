const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    profile: {
        type: String,
    },
    gender: {
        type: Boolean,
    },
    avatar: {
        type: String
    },  
    image: {
        data: Buffer,
        contentType: String,
    },
    isActived: {
        type: Boolean
    },  
    isAdmin: {
        type: Boolean
    }, 
    status: {
        type: Boolean
    },   
});


module.exports = mongoose.model('User', userSchema);