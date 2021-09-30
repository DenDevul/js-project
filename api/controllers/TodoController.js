const { Todo } = require('../models/index');

module.exports = {
  // тут надо че-то сделать
  getTodo: async (req, res) => {
    const todo = await Todo.findByPk(req.params.todoId);
    if (todo) {
      res.json(todo);
    } else {
      res.sendStatus(404);
    }
  },

  getTodos: async (req, res) => {
    const todos = await Todo.findAll({
      where: {
        userId: req.user.id
      }
    });
    res.json(req.user.id);
  },

  createTodo: async (req, res) => {
    try {
      const todo = await Todo.create(req.body);
      res.sendStatus(201);
    } catch (error) {
      res.sendStatus(500)
    }
  },

  deleteTodo: async (req, res) => {
    const todo = await Todo.findByPk(req.params.todoId);
    if (todo) {
      await Todo.destroy({ where: { id: req.params.todoId } });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  },

  updateTodo: async (req, res) => {
    const todo = await Todo.findByPk(req.params.todoId);
    if (todo) {
      await Todo.update(req.body, { where: { id: req.params.todoId } });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
};
