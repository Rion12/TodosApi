var express = require("express"),
    router = express.Router(),
    db = require("../models"),
    helpers = require("../helpers/todos");
    
// INDEX/CREATE ROUTES
router.route('/')
    .get(helpers.getTodos)
    .post(helpers.createTodo);
    
// SHOW/UPDATE/DELETE ROUTES
router.route('/:todoId')
    .get(helpers.showTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo);

module.exports = router;