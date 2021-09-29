const router = require('./index')
const user = require('../controllers/UserController')

router.get('/users', user.getUsers)

router.get('/user/:userId', user.getUser)

router.post('/user', user.postUser)

router.delete('/user/:userId', user.deleteUser)

router.put('/user/:userId', user.putUser)

module.exports = router