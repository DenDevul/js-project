const { User } = require('../models/index');

module.exports = {
  getUser: async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      res.json(user);
    } else {
      res.sendStatus(404);
    }
  },

  getUsers: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
  },

  postUser: async (req, res) => {
    const [_, created] = await User.findOrCreate({
      where: {
        email: req.body.user.email
      },
      defaults: req.body.user
    });
    if (created) {
      res.sendStatus(201);
    } else {
      res.json('user already exists');
    }
  },

  deleteUser: async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await User.destroy({ where: { id: req.params.userId } });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  },

  putUser: async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await User.update(req.body.user, { where: { id: req.params.userId } });
      res.sendStatus(200)
    } else {
      res.sendStatus(404)
    }
  }
};
