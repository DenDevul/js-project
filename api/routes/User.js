const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController')

router.get('/users', user.getUsers)

router.post('/user/signup', user.signup)

router.post('/user/login', user.login)

router.delete('/user/delete/:userId', user.deleteUser)

router.put('/user/update/:userId', user.putUser)

module.exports = router