const { Sequelize, DataTypes } = require('sequelize');
// const User = require("./User");
// const Todo = require("./Todo");

const db = new Sequelize({
  dialect: 'postgres',
  database: 'tododb',
  username: 'densup',
  password: 'fiji'
});

const User = db.define('User', {
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

const Todo = db.define('Todo', {
  title: DataTypes.STRING,
  description: DataTypes.STRING
});

User.hasMany(Todo, { foreignKey: 'userId', onDelete: 'cascade' });
Todo.belongsTo(User, { foreignKey: 'userId' });

// db.sync({ force: true })
//   .then((module.exports = db))
//   .catch((err) => console.log(err));

module.exports = {
  db: db,
  User: User,
  Todo: Todo
}
