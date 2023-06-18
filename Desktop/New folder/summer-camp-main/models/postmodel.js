const mongoose = require('mongoose');
const students = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    sit: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
});

const loginuser = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    Status: {
        type: String,
        require: true
    }
});
const allstudentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    sit: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    sname: {
        type: String,
        require: true
    },
    semail: {
        type: String,
        require: true
    },
    simage: {
        type: String,
        require: true
    },
    time: {
        type: String,
        require: true
    }
})

const pementsucess = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    sit: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    semail: {
        type: String,
        require: true
    }


})

const postmodel = mongoose.model('students', students);
const usermodel = mongoose.model('loginuser', loginuser);
const allstudent = mongoose.model('allstudent', allstudentSchema);
const sucesspement = mongoose.model('pementsucess', pementsucess);


module.exports = {
    postmodel,
    usermodel,
    allstudent,
    sucesspement

};