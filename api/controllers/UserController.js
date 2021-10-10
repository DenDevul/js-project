const { User } = require('../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  login: async (req, res) => {
    const user = await User.findOne({
      where: { email: req.body.email }
    });
    if (user) {
      try {
        if (await bcrypt.compare(req.body.password, user.password)) {
          const token = jwt.sign({id: user.id}, process.env.ACCESS_TOKEN_SECRET)
          res.json(token)
        } else {
          res.status(401).send('Wrong password');
        }
      } catch (error) {
        res.sendStatus(500);
      }
    } else {
      res.status(401).json('user not found')
    }
  },

  signup: async (req, res) => {
    if (await User.findOne({ where: { email: req.body.email } })) {
      res.status(400).send('user with that email already exists');
    } else {
      try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await User.create({ email: req.body.email, password: hashedPassword });
        res.status(201).json({id: user.id});
      } catch (error) {
        res.status(500).send(error);
      }
    }
  },

  getUsers: async (req, res) => {
    const users = await User.findAll();
    res.json(users);
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
      await User.update(req.body, { where: { id: req.params.userId } });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  }
};
