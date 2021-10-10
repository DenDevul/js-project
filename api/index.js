require('dotenv').config()
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/User');
const todoRouter = require('./routes/Todo')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use(todoRouter);


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
