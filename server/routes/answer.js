const express = require('express')
const router = express.Router()
const answerController = require('../controller/answer')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorizationanswer')

router.use(authentication)
router.get('/', answerController.getanswers)
router.get('/mine', answerController.getMyanswer)
router.get('/mine/:id', answerController.getOneAnswer)
router.post('/create', answerController.createanswer)
router.delete('/:id', answerController.deleteanswer)
router.patch('/upvote/:id', answerController.upvote)
router.patch('/downvote/:id', answerController.downvote)
router.patch('/update/:id', authorization, answerController.updateanswer)





module.exports = router;