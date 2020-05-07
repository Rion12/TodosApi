var mongoose = require("mongoose");

// here we define the schema for our todo model
var todoSchema = new mongoose.Schema({
    // we can do "name: String", but we give it an object to pass it more parameters
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

// Here we create our model
var Todo = mongoose.model('Todo', todoSchema);

// We export the model so when we require it from other pages it retrieves the Todo model
module.exports = Todo;