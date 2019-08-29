const express = require('express')
const router = express.Router()
const userController = require('../controller/user')
const authentication = require('../middlewares/authentication')

router.post('/signin', userController.signIn)
router.post('/register', userController.register)
router.use(authentication)
router.patch('/addTags', userController.addTags)
router.get('/myTags', userController.getMyTags)

module.exports = router;