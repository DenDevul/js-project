const { Sequelize, DataTypes, UUIDV4 } = require('sequelize');
// const User = require("./User");
// const Todo = require("./Todo");

const db = new Sequelize({
  dialect: 'postgres',
  database: process.env.DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

const User = db.define('User', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false
  },
  email: DataTypes.STRING,
  password: DataTypes.STRING
});

const Todo = db.define('Todo', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    allowNull: false
  },
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
};
