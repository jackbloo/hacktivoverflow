const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', questionController.getQuestions)
router.get('/mine', questionController.getMyQuestion)
router.post('/create', questionController.createQuestion)
router.patch('/:id', questionController.updateQuestion)
router.delete('/:id', questionController.deleteQuestion)
router.patch('/upvote/:id', questionController.upvote)
router.patch('/downvote/:id', questionController.downvote)
router.post('/createTags', questionController.createTags)
router.get('/:tag', questionController.getTagsbyName)

module.exports = router;