const express = require('express');
const router = express.Router();
const user = require('../controllers/UserController')

router.get('/api/users', user.getUsers)

router.post('/api/user/signup', user.signup)

router.post('/api/user/login', user.login)

router.delete('/api/user/delete/:userId', user.deleteUser)

router.put('/api/user/update/:userId', user.putUser)

module.exports = router