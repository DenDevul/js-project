const express = require('express');
const cors = require('cors');
const router = require('./routes');
const userRouter = require('./routes/User')
// const { User, Todo } = require('./models/index');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(userRouter);


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
