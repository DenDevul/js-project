const express = require('express');
const router = express.Router();
const todo = require('../controllers/TodoController');
const verifyToken = require('./verifyToken');

router.get('/todos', verifyToken, todo.getTodos);

router.post('/todo/create', verifyToken, todo.createTodo);

// router.get('/todo/get/:todoId', verifyToken, todo.getTodo)

router.delete('/todo/delete/:todoId', verifyToken, todo.deleteTodo);

router.put('/todo/update/:todoId', verifyToken, todo.updateTodo);

module.exports = router;
