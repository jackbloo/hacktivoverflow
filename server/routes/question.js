const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', questionController.getQuestions)
router.get('/mine', questionController.getMyQuestion)
router.get('/mine/:id', questionController.getOneQuestion)
router.post('/create', questionController.createQuestion)
router.patch('/update/:id', authorization, questionController.updateQuestion)
router.delete('/:id', authorization, questionController.deleteQuestion)
router.patch('/upvote/:id', questionController.upvote)
router.patch('/downvote/:id', questionController.downvote)
router.patch('/createTags', questionController.createTags)
router.get('/tags/:tag', questionController.getTagsbyName)

module.exports = router;