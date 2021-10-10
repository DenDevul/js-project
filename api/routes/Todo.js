const express = require('express');
const router = express.Router();
const todo = require('../controllers/TodoController');
const verifyToken = require('./verifyToken');

router.get('/api/todos', verifyToken, todo.getTodos);

router.post('/api/todo/create', verifyToken, todo.createTodo);

// router.get('api/todo/get/:todoId', verifyToken, todo.getTodo)

router.delete('/api/todo/delete/:todoId', verifyToken, todo.deleteTodo);

router.put('/api/todo/update/:todoId', verifyToken, todo.updateTodo);

module.exports = router;
