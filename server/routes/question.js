const express = require('express')
const router = express.Router()
const questionController = require('../controller/question')

router.get('/', questionController.getQuestions)
router.get('/mine', questionController.getMyQuestion)
router.post('/create', questionController.createQuestion)
router.patch('/:id', questionController.updateQuestion)
router.delete('/:id', questionController.deleteQuestion)

module.exports = router;