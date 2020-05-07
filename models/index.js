var mongoose = require("mongoose");
mongoose.set('debug', true);
// todo-api is the name we are giving to our database
mongoose.connect('mongodb://localhost/todo-api');
// this line allows us to use promise syntax
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");