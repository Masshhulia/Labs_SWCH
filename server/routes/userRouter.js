const Router = require('express');
const router = new Router();
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/registration', UserController.registration)
router.post('/login',UserController.login)
router.get('/check', UserController.check)
router.post('/change_password', UserController.changePassword)
router.get('/auth', authMiddleware, UserController.check)
router.get('/', UserController.getAll)



module.exports = router;